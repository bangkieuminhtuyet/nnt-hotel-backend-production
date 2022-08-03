const db = require('../models');
const emailService = require('./emailService');

const getPaganition = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const totalBooking = await db.Bookings.count();
      const totalQuestions = await db.CustomerQuestions.count();
      if (totalBooking && totalQuestions) {
        resolve({
          status: 200,
          code: 0,
          message: 'OK',
          data: { totalBooking, totalQuestions },
        });
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
        data: {},
      });
    }
  });
};

const getAllBookingInfo = (sortData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        bookingStatus,
        checkInDay,
        limit,
        offset,
        searchCode,
        sortHotelId,
      } = sortData;
      const returnBookingStatus = (bookingStatus) => {
        switch (bookingStatus) {
          case 'all':
            return {};
          case 'waitingForReception':
            return { isReceptionAccept: null };
          case 'receptionRejectBooking':
            return { isReceptionAccept: false };
          case 'waitingForCustomer':
            return {
              isCustomerCheckIn: null,
              isReceptionAccept: true,
            };
          case 'customerCheckIn':
            return { isCustomerCheckIn: true };
          case 'customerNotCheckIn':
            return { isCustomerCheckIn: false };
          default:
            return {};
        }
      };
      const bookingStatusObject = returnBookingStatus(bookingStatus);

      const conditionObject = () => {
        if (searchCode === '') {
          return checkInDay !== 'null'
            ? { ...bookingStatusObject, checkInDate: checkInDay }
            : { ...bookingStatusObject };
        }
        if (searchCode !== '') {
          return { BookingCode: searchCode.toUpperCase() };
        }
      };

      const filterHotel = () => {
        if (sortHotelId == 0) {
          return conditionObject();
        } else {
          return {
            ...conditionObject(),
            HotelId: +sortHotelId,
          };
        }
      };

      const allBookings = await db.Bookings.findAll({
        raw: true,
        order: [['id', 'DESC']],
        where: filterHotel(),
        offset: +offset,
        limit: +limit,
        subQuery: false,
      });

      const count = await db.Bookings.count({
        where: conditionObject(),
      });

      if (allBookings) {
        resolve({
          status: 200,
          code: 0,
          message: 'OK',
          data: allBookings,
          count: count,
        });
      } else {
        reject({
          status: 400,
          code: 1,
          message: 'Cannot get Data from DB',
          data: {},
        });
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
        data: {},
      });
    }
  });
};

const postReceptionActions = (bookingId, receptionAccept, customerCheckIn) => {
  return new Promise(async (resolve, reject) => {
    try {
      const roomAccept = await db.Bookings.findOne({
        where: { id: bookingId },
      });
      if (roomAccept) {
        let emailObject = roomAccept;
        if (customerCheckIn === null && receptionAccept === true) {
          await emailService.sendReceptionAcceptEmail(emailObject);
          await roomAccept.update({
            ReceptionAcceptTime: new Date(),
          });
        } else if (customerCheckIn === null && receptionAccept === false) {
          await roomAccept.update({
            ReceptionAcceptTime: new Date(),
          });
          const { CustomerName, CustomerEmail, CustomerPhone, BookingCode } =
            roomAccept;
          let phoneArray = [];
          const hotelInfos = await db.Hotels.findAll({
            where: { isDeleted: false, isActive: true },
            raw: true,
          });

          hotelInfos.forEach((item) => {
            phoneArray.push({
              name: `NNT ${item.NameVn}`,
              phone: item.ReceptionPhone,
            });
          });

          await emailService.sendReceptionRejectEmail(
            CustomerEmail,
            phoneArray
          );
        }
        if (customerCheckIn === true) {
          await roomAccept.update({
            CustomerCheckInTime: new Date(),
          });
        }
        await roomAccept.update({
          isReceptionAccept: receptionAccept,
          isCustomerCheckIn: customerCheckIn,
        });
        resolve({
          status: 200,
          code: 0,
          message: 'OK',
        });
      } else {
        reject({
          status: 400,
          code: 1,
          message: 'Cannot get Data from DB',
          data: {},
        });
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
        data: {},
      });
    }
  });
};

const getAllBookingDays = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const responseData = await db.Bookings.findAll({
        attributes: ['CheckInDate'],
      });
      if (responseData) {
        let returnDays = [];
        responseData.forEach((item) => {
          returnDays.push(item.CheckInDate);
        });
        resolve({
          status: 200,
          code: 0,
          message: 'OK',
          data: returnDays,
        });
      } else {
        reject({
          status: 400,
          code: 1,
          message: 'Cannot get Data from DB',
          data: {},
        });
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
        data: {},
      });
    }
  });
};

const postUpdateRooms = (roomInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!roomInfo.id) {
        //create new rooms
        const { ...data } = roomInfo;
        let newId;
        await db.Rooms.create({
          ...data,
          isActive: true,
          isDeleted: false,
        }).then((result) => {
          newId = result.id;
        });
        await db.RoomPrices.create({
          ...data,
          RoomId: newId,
          isDiscount: true,
          isDeleted: false,
        });
        await db.RoomImages.create({
          ...data,
          RoomId: newId,
          Image: 'https://i.ibb.co/WvtCXfZ/test-picture.png',
          ImageOnlineLink: 'https://i.ibb.co/WvtCXfZ/test-picture.png',
          isThumbnail: true,
          isDeleted: false,
        });
        resolve({
          status: 200,
          code: 0,
          message: 'Đã tạo mới thành công',
        });
      } else {
        const roomPricesChange = await db.RoomPrices.findOne({
          where: { RoomId: roomInfo.id, isDeleted: false },
        });

        const roomInfoChange = await db.Rooms.findOne({
          where: { id: roomInfo.id },
        });
        if (roomPricesChange && roomInfoChange) {
          const { ...data } = roomInfo;
          await roomPricesChange.update({
            ...data,
          });
          await roomInfoChange.update({
            ...data,
          });

          resolve({
            status: 200,
            code: 0,
            message: 'Đã cập nhật thành công',
          });
        } else {
          reject({
            status: 400,
            code: 1,
            message: 'Cannot get Data from DB',
            data: {},
          });
        }
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
        data: {},
      });
    }
  });
};

const postHeroHeaders = (pictureFile) => {
  return new Promise(async (resolve, reject) => {
    try {
      const heroHeaderDB = await db.HeroHeaders.findOne({
        where: { isDeleted: false, isActive: true },
      });
      if (heroHeaderDB) {
        await heroHeaderDB.update({
          ImgBlob: pictureFile,
        });
        resolve({
          status: 200,
          code: 0,
          message: 'Đã chỉnh sửa thành công !',
        });
      } else {
        {
          reject({
            status: 400,
            code: 2,
            message: 'Phải tạo thông tin khách sạn trước !',
          });
        }
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
      });
    }
  });
};

const postHotelIntroduction = (hotelIntroductionObject) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { HotelId, ...others } = hotelIntroductionObject;
      if (!HotelId) {
        reject({
          status: 400,
          code: 2,
          message: 'Chưa tạo mới khách sạn',
        });
      } else {
        const response = await db.HotelIntroductions.findOne({
          where: { HotelId },
        });
        if (response) {
          await response.update({
            ...others,
          });
          resolve({
            status: 200,
            code: 0,
            message: 'Đã sửa thành công',
          });
        } else {
          await db.HotelIntroductions.create({
            ...hotelIntroductionObject,
            isActive: true,
            isDeleted: false,
          });
          resolve({
            status: 200,
            code: 0,
            message: 'Đã thêm mới thành công',
          });
        }
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
      });
    }
  });
};

const postHotelInfo = (hotelInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hotelId = hotelInfo.id;
      const hotelData = await db.Hotels.findOne({
        where: { id: hotelId },
      });
      if (hotelData) {
        await hotelData.update({
          ...hotelInfo,
        });
        resolve({
          status: 200,
          code: 0,
          message: 'Đã sửa thành công',
        });
      } else {
        await db.Hotels.create({
          ...hotelInfo,
          isActive: true,
          isDeleted: false,
        });
        resolve({
          status: 200,
          code: 0,
          message: 'Đã tạo thông tin mới',
        });
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
      });
    }
  });
};

const deleteRoomImage = (imageId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.RoomImages.findOne({
        where: { id: imageId },
      });
      if (response) {
        await response.update({
          isDeleted: true,
        });
        resolve({
          status: 200,
          code: 0,
          message: 'Đã xóa thành công!',
        });
      } else {
        reject({
          status: 400,
          code: 1,
          message: 'Cannot get Data from DB',
        });
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
      });
    }
  });
};

const handlePickThumbnailHotelImage = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { HotelId: hotelId, id: imageId } = data;
      const allThumbnail = await db.HotelImages.findAll({
        where: {
          HotelId: hotelId,
          isThumbnail: true,
          isDeleted: false,
          isActive: true,
        },
      });
      if (allThumbnail) {
        allThumbnail.forEach(async (item) => {
          await item.update({
            isThumbnail: false,
          });
        });
        const response = await db.HotelImages.findOne({
          where: {
            id: imageId,
            HotelId: hotelId,
            isDeleted: false,
            isActive: true,
          },
        });
        if (response) {
          await response.update({
            isThumbnail: true,
          });
          resolve({
            status: 200,
            code: 0,
            message: 'Đã cập nhật thumbnail thành công !',
          });
        }
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
      });
    }
  });
};

const postChangeRoomThumbnail = (imageId, roomId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const roomImages = await db.RoomImages.findAll({
        where: { RoomId: roomId, isDeleted: false, isActive: true },
      });
      if (roomImages) {
        roomImages.forEach(async (item) => {
          await item.update({
            isThumbnail: false,
          });
        });
        const imageThumbnail = await db.RoomImages.findOne({
          where: {
            id: imageId,
            isDeleted: false,
            isActive: true,
          },
        });

        imageThumbnail.update({
          isThumbnail: true,
          isDeleted: false,
          isActive: true,
        });
        resolve({
          status: 200,
          code: 0,
          message: 'Đã cập nhật lại ảnh thumbnail',
        });
      } else {
        reject({
          status: 400,
          code: 1,
          message: 'Cannot get Data from DB',
        });
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
      });
    }
  });
};

const postNewRoomImage = (file, roomId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkThumbnailImage = await db.RoomImages.findOne({
        where: { isThumbnail: true, RoomId: roomId, isDeleted: false },
      });
      const hotelIdPicker = await db.Rooms.findOne({
        where: { id: roomId },
        raw: true,
      });
      await db.RoomImages.create({
        Image: file,
        RoomId: roomId,
        isThumbnail: checkThumbnailImage === null,
        isDeleted: false,
        ImageOnlineLink: file,
        HotelId: hotelIdPicker.HotelId,
      });
      resolve({
        status: 200,
        code: 0,
        message: 'Đã upload ảnh mới thành công !',
      });
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
      });
    }
  });
};

const handleDeleteRoomService = (roomId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const roomInfo = await db.Rooms.findOne({
        where: {
          id: roomId,
        },
      });
      if (roomInfo) {
        await roomInfo.update({
          isActive: false,
          isDeleted: true,
        });
        resolve({
          status: 200,
          code: 0,
          message: 'Đã xóa phòng thành công !!',
        });
      } else {
        reject({
          status: 400,
          code: 1,
          message: 'Cannot get Data from DB',
        });
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
      });
    }
  });
};

const handlePostNewNearBy = ({ action, data }) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data.id) {
        const nearByPlace = await db.NearByPlaces.findOne({
          where: { id: data.id, isDeleted: false, isActive: true },
        });

        if (action === 'create') {
          await nearByPlace.update({
            ...data,
          });
          resolve({
            status: 200,
            code: 0,
            message: 'Đã chỉnh sửa thành công !',
          });
        }
        if (action === 'delete') {
          nearByPlace.update({
            ...data,
            isDeleted: true,
            isActive: false,
          });
          resolve({
            status: 200,
            code: 0,
            message: 'Đã xóa thành công !',
          });
        }
      } else {
        await db.NearByPlaces.create({
          ...data,
          isDeleted: false,
          isActive: true,
        });
        resolve({
          status: 200,
          code: 0,
          message: 'Đã tạo mới thành công !',
        });
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
      });
    }
  });
};

const handleChangeDataTable = (table, { action, data }, checkIdBy) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data.id) {
        let record;
        if (!checkIdBy) {
          record = await db[table].findOne({
            where: { id: data.id, isDeleted: false, isActive: true },
          });
        } else {
          record = await db[table].findOne({
            where: { [checkIdBy]: data.id, isDeleted: false, isActive: true },
          });
        }

        if (action === 'create') {
          if (!checkIdBy) {
            await record.update({
              ...data,
            });
          } else {
            delete data.id;
            await record.update({
              ...data,
            });
          }

          resolve({
            status: 200,
            code: 0,
            message: 'Đã chỉnh sửa thành công !',
          });
        }

        if (action === 'delete') {
          await record.update({
            ...data,
            isDeleted: true,
            isActive: false,
          });
          resolve({
            status: 200,
            code: 0,
            message: 'Đã xóa thành công !',
          });
        }
      } else {
        await db[table].create({
          ...data,
          isDeleted: false,
          isActive: true,
        });
        resolve({
          status: 200,
          code: 0,
          message: 'Đã tạo mới thành công !',
        });
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
      });
    }
  });
};

const getCustomerQuestion = ({ offset, limit }) => {
  return new Promise(async (resolve, rejcet) => {
    try {
      const response = await db.CustomerQuestions.findAll({
        where: { isDeleted: false },
        order: [['id', 'DESC']],
        offset: +offset,
        limit: +limit,
        subQuery: false,
      });
      const count = await db.CustomerQuestions.count({
        where: { isDeleted: false },
      });
      if (response) {
        resolve({
          status: 200,
          code: 0,
          message: 'OK',
          data: response,
          count: count,
        });
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
      });
    }
  });
};

const handleChangePromotion_off = ({ action, data }) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (action === 'create') {
        await db.Promotions.create({
          Title: data.title,
          SubTitle: data.subTitle,
          EditorContent: data.editorContent,
          HtmlContent: data.htmlContent,
          Thumbnail: data.thumbnailImage,
          isPopUp: false,
          isDeleted: false,
          isActive: true,
        });
        resolve({
          status: 200,
          code: 0,
          message: 'Đã tạo bài viết thành công !',
        });
      }
      if (action === 'delete') {
        const deleteData = await db.Promotions.findOne({
          where: { id: data.id },
        });
        await deleteData.update({
          ...deleteData,
          isDeleted: true,
          isActive: false,
        });
        resolve({
          status: 200,
          code: 0,
          message: 'Đã xóa thành công ! ',
        });
      }
      if (action === 'update') {
        const updateData = await db.Promotions.findOne({
          where: { id: data.id },
        });
        await updateData.update({
          ...updateData,
          Title: data.title,
          SubTitle: data.subTitle,
          EditorContent: data.editorContent,
          HtmlContent: data.htmlContent,
          Thumbnail: data.thumbnailImage,
        });
        resolve({
          status: 200,
          code: 0,
          message: 'Đã update thành công ! ',
        });
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
      });
    }
  });
};

const handlePostChangeRoomsPrices = ({ action, data }) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data.id) {
        const record = await db.RoomPrices.findOne({
          where: {
            RoomId: data.id,
            isActive: true,
            isDeleted: false,
          },
        });
        if (action === 'create') {
          await record.update({
            ...data,
          });
          resolve({
            status: 200,
            code: 0,
            message: 'Đã cập nhật giá thành công !',
          });
        }
      }
    } catch (e) {
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
      });
    }
  });
};

module.exports = {
  getAllBookingInfo,
  postReceptionActions,
  getAllBookingDays,
  postUpdateRooms,
  postHeroHeaders,
  postHotelIntroduction,
  postHotelInfo,
  deleteRoomImage,
  postChangeRoomThumbnail,
  postNewRoomImage,
  handleDeleteRoomService,
  handlePostNewNearBy,
  handleChangeDataTable,
  getCustomerQuestion,
  handlePostChangeRoomsPrices,
  handlePickThumbnailHotelImage,
  getPaganition,
};
