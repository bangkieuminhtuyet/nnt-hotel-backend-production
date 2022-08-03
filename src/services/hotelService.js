const db = require('../models');
const emailService = require('./emailService');
const { attributesJoinDataFn } = require('../utils/middleware');
var randomize = require('randomatic');

const getOneInfoFromTable = (table) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db[table].findOne({
        where: { isActive: true, isDeleted: false },
        attributes: {
          exclude: ['isActive', 'isDeleted', 'createdAt', 'updatedAt'],
        },
      });
      if (response) {
        resolve({
          status: 200,
          code: 0,
          message: 'OK',
          data: response,
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

const getAllInfoFromTable = (table) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db[table].findAll({
        where: { isActive: true, isDeleted: false },
        attributes: {
          exclude: ['isActive', 'isDeleted', 'createdAt', 'updatedAt'],
        },
      });
      if (response) {
        resolve({
          status: 200,
          code: 0,
          message: 'OK',
          data: response,
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

const getHotelInfo = (hotelId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (hotelId === 'all') {
        const response = await db.Hotels.findAll({
          where: { isActive: true, isDeleted: false },
          order: [['OrderDisplay', 'ASC']],
        });
        if (response) {
          resolve({
            status: 200,
            code: 0,
            message: 'OK',
            data: response,
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
      if (hotelId !== 'all') {
        const response = await db.Hotels.findOne({
          where: { id: hotelId },
          raw: true,
        });
        if (response) {
          resolve({
            status: 200,
            code: 0,
            message: 'OK',
            data: response,
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

const getHeroHeaders = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.HeroHeaders.findOne({
        where: { isDeleted: false, isActive: true },
        raw: true,
      });
      if (response) {
        resolve({
          status: 200,
          code: 0,
          message: 'OK',
          data: response.ImgBlob,
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

const getHotelIntroduction = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.HotelIntroductions.findOne({
        where: { isActive: true, isDeleted: false },
        attributes: ['id', 'ValueVn', 'ValueEn', 'ImgBlob'],
        raw: true,
      });
      resolve({
        status: 200,
        code: 0,
        message: 'OK',
        data: data,
      });
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

const getRoomslPriceThumbnail = (HotelId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Rooms.findAll({
        where: { HotelId, isDeleted: false, isActive: true },
        attributes: {
          exclude: ['isActive', 'isDeleted', 'createdAt', 'updatedAt'],
        },
        include: [
          {
            model: db.RoomImages,
            as: 'RoomsRoomImagesData',
            where: {
              isThumbnail: true,
              HotelId,
              isDeleted: false,
            },
            attributes: ['isThumbnail', 'image', 'ImageOnlineLink'],
          },
          {
            model: db.RoomPrices,
            as: 'RoomsRoomPricesData',
            where: {
              isDeleted: false,
              HotelId,
            },
            attributes: {
              exclude: [
                'isDeleted',
                'createdAt',
                'updatedAt',
                'id',
                'RoomId',
                'HotelId',
              ],
            },
          },
        ],
        order: [['OrderDisplay', 'ASC']],
        nest: true,
        raw: true,
      });
      if (!response) {
        reject({
          status: 400,
          code: 1,
          message: 'Cannot get Data from DB',
          data: {},
        });
      } else {
        resolve({
          status: 200,
          code: 0,
          message: 'OK',
          data: response,
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

const getRoomsMoreImages = (RoomId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Rooms.findAll({
        where: { id: RoomId, isDeleted: 0, isActive: 1 },
        attributes: ['id', 'NameEn', 'NameVn', 'NameCn'],
        include: [
          {
            model: db.RoomImages,
            as: 'RoomsRoomImagesData',
            where: {
              RoomId,
              isDeleted: false,
            },
            attributes: ['id', 'ImageOnlineLink', 'isThumbnail'],
          },
        ],
        nest: true,
        raw: true,
      });

      if (!data) {
        reject({
          status: 400,
          code: 1,
          message: 'Cannot get Data from DB',
          data: {},
        });
      } else {
        resolve({
          status: 200,
          code: 0,
          message: 'OK',
          data: attributesJoinDataFn(data, 'RoomsRoomImagesData'),
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

const getNearByPlaces = (HotelId) => {
  return new Promise(async (resolve, reject) => {
    const res = await db.NearByPlaces.findAll({
      where: { HotelId, isDeleted: 0, isActive: 1 },
      attributes: {
        exclude: ['isDeleted', 'isActive', 'createdAt', 'updatedAt'],
      },
    });
    if (!res) {
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
        data: {},
      });
    } else {
      resolve({
        status: 200,
        code: 0,
        message: 'OK',
        data: res,
      });
    }
    try {
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

const getCustomerReviews = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.CustomerReviews.findAll({
        where: { isDeleted: false, isActive: true },
        attributes: {
          exclude: ['isDeleted', 'isActive', 'createdAt', 'updatedAt'],
        },
        raw: true,
      });
      if (!res) {
        reject({
          status: 400,
          code: 1,
          message: 'Cannot get Data from DB',
          data: {},
        });
      } else {
        resolve({
          status: 200,
          code: 0,
          message: 'OK',
          data: res,
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

const postBookings = (bookingInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const randomCode = randomize('0', 6);
      let newID;

      const convertMomentDateToJsDate = (date) => {
        if (date) {
          const dd = date.slice(0, 2);
          const mm = date.slice(3, 5);
          const yyyy = date.slice(6, 10);
          return yyyy + '-' + mm + '-' + dd;
        } else {
          return null;
        }
      };

      bookingInfo.roomBookedList.forEach((item) => delete item.imageLink);
      await db.Bookings.create({
        CustomerName: bookingInfo.customerName,
        CustomerPhone: bookingInfo.customerPhone,
        CustomerEmail: bookingInfo.customerEmail,
        HotelId: bookingInfo.hotelId,
        HotelName: bookingInfo.hotelName,
        StayType: bookingInfo.stayType,
        RoomBookedList: JSON.stringify(bookingInfo.roomBookedList),
        AdultNumber: bookingInfo.adultNumber,
        ChildrenNumber: bookingInfo.childrenNumber,
        NoteForHotel: bookingInfo.noteForHotel,

        CheckInDate: convertMomentDateToJsDate(bookingInfo.checkInDate),
        CheckInTime:
          bookingInfo.stayType === 'ND' ? '21:00' : bookingInfo.checkInTime,
        CheckOutDate: convertMomentDateToJsDate(bookingInfo.checkOutDate),
        CheckOutTime: bookingInfo.checkOutTime,

        DayBooked: bookingInfo.dayBooked,
        TotalMoneyBooked: bookingInfo.totalMoneyBooked,
        isDeleted: false,
        isMailConfirm: false,
        MailConfirmCode: randomCode,
        BookingCode: randomize('A0', 6),
      }).then((result) => (newID = result.id));

      await emailService.sendEmailConfirmCode(
        bookingInfo.customerEmail,
        randomCode
      );
      resolve({
        status: 200,
        code: 0,
        message: 'OK',
        data: { bookingId: newID },
      });
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

const postConfirmEmailCode = (confirmObject) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { bookingId, emailConfirmCode } = confirmObject;
      const bookingItem = await db.Bookings.findOne({
        where: { id: confirmObject.bookingId },
        // raw: true,
      });
      if (bookingItem.MailConfirmCode === confirmObject.emailConfirmCode) {
        await bookingItem.update({ isMailConfirm: true });
        resolve({
          status: 200,
          code: 0,
          message: 'OK',
        });
        await emailService.sendNewBooking(
          'datphong.nnthotel@gmail.com',
          bookingItem
        );
      } else {
        if (confirmObject.timeOutDelete) {
          await bookingItem.destroy();
          reject({
            status: 400,
            code: 3,
            message: 'Code input timeout',
          });
        } else {
          reject({
            status: 400,
            code: 2,
            message: 'Not match confirm code',
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

const postCustomerQuestion = (questionObject) => {
  return new Promise(async (resolve, reject) => {
    try {
      let newId;
      const { name, phone, email, message } = questionObject;
      await emailService.sendNewQuestions(email, questionObject);
      await db.CustomerQuestions.create({
        Name: name,
        Phone: phone,
        Email: email,
        Message: message,
        isReadByReception: false,
        isReadByManager: false,
        isDeleted: false,
        isActive: true,
      }).then((result) => {
        newId = result.id;
      });
      if (newId) {
        resolve({
          status: 200,
          code: 0,
          message: 'Quý khách đã gửi thông tin thành công ! Xin cảm ơn.',
          data: newId,
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

const getAllPromotions = (type) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (type === 'homepage') {
        const data = await db.Promotions.findAll({
          where: { isDeleted: false, isActive: true },
        });
        if (data) {
          resolve({
            status: 200,
            code: 0,
            message: 'OK',
            data: data,
          });
        } else {
          reject({
            status: 400,
            code: 1,
            message: 'Cannot get Data from DB',
            data: [],
          });
        }
      } else {
        const data = await db.Promotions.findOne({
          where: { id: type },
        });
        if (data) {
          resolve({
            status: 200,
            code: 0,
            message: 'OK',
            data: data,
          });
        } else {
          reject({
            status: 400,
            code: 1,
            message: 'Cannot get Data from DB',
            data: [],
          });
        }
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
        data: [],
      });
    }
  });
};

const getAllRoomsCommonInfo = (HotelId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Rooms.findAll({
        where: {
          HotelId,
          isActive: true,
          isDeleted: false,
        },
        order: [['OrderDisplay', 'ASC']],
      });
      if (data) {
        resolve({
          status: 200,
          code: 0,
          message: 'OK',
          data: data,
        });
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
        data: [],
      });
    }
  });
};

const getAllRoomsPrices = (HotelId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.RoomPrices.findAll({
        where: {
          HotelId,
          isActive: true,
          isDeleted: false,
        },
        attributes: {
          exclude: ['id', 'isActive', 'isDeleted', 'createdAt', 'updatedAt'],
        },
      });
      if (data) {
        resolve({
          status: 200,
          code: 0,
          message: 'OK',
          data: data,
        });
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
        data: [],
      });
    }
  });
};

module.exports = {
  getHotelIntroduction,
  getRoomslPriceThumbnail,
  getRoomsMoreImages,
  getNearByPlaces,
  getCustomerReviews,
  postBookings,
  postConfirmEmailCode,
  getHeroHeaders,
  getHotelInfo,
  postCustomerQuestion,
  getAllPromotions,
  getAllRoomsCommonInfo,
  getAllRoomsPrices,
  getAllInfoFromTable,
  getOneInfoFromTable,
};
