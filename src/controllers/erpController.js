const db = require('../models/index');
const erpServices = require('../services/erpServices');

const handleGetPaganition = async (req, res) => {
  try {
    const response = await erpServices.getPaganition();
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handleGetAllBookingInfo = async (req, res) => {
  try {
    const response = await erpServices.getAllBookingInfo(req.query);
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
      count: response.count,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handleReceptionActions = async (req, res) => {
  try {
    const { bookingId, receptionAccept, customerCheckIn } = req.body;
    const response = await erpServices.postReceptionActions(
      bookingId,
      receptionAccept,
      customerCheckIn
    );
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handleGetAllBookingDays = async (req, res) => {
  try {
    const response = await erpServices.getAllBookingDays();
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handlePostUpdateRooms_old = async (req, res) => {
  try {
    const roomInfo = req.body.roomInfo;
    const response = await erpServices.postUpdateRooms(roomInfo);
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: e.message,
    });
  }
};

const handlePostUpdateRooms = async (req, res) => {
  try {
    const { action, data } = req.body;
    const response = await erpServices.handleChangeDataTable('Rooms', {
      action,
      data,
    });
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handlePostLoginStaff = async (req, res) => {
  try {
    const userLoginInfo = req.body;
    const response = await erpServices.postLoginStaff(userLoginInfo);
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handlePostHeroHeaders = async (req, res) => {
  try {
    const picture = req.body.pictureFile;
    const response = await erpServices.postHeroHeaders(picture);
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handlePostHotelIntroduction_old = async (req, res) => {
  try {
    const hotelIntroductionObject = req.body;
    const response = await erpServices.postHotelIntroduction(
      hotelIntroductionObject
    );
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handlePostHotelIntroduction = async (req, res) => {
  try {
    const { action, data } = req.body;

    const response = await erpServices.handleChangeDataTable(
      'HotelIntroduction',
      {
        action,
        data,
      }
    );
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handlePostHotelInfo = async (req, res) => {
  try {
    const { action, data } = req.body;
    const response = await erpServices.handleChangeDataTable('Hotels', {
      action,
      data,
    });
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handleDeleteRoomImage = async (req, res) => {
  try {
    const { imageId } = req.body;
    const response = await erpServices.deleteRoomImage(imageId);
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handlePostChangeRoomThumbnail = async (req, res) => {
  try {
    const { imageId, roomId } = req.body;
    const response = await erpServices.postChangeRoomThumbnail(imageId, roomId);
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handlePostNewRoomImage = async (req, res) => {
  try {
    const { image, roomId } = req.body;
    const response = await erpServices.postNewRoomImage(image, roomId);
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handleDeleteRoom = async (req, res) => {
  try {
    const roomId = req.body.roomId;
    const response = await erpServices.handleDeleteRoomService(roomId);
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handlePostNewChangeNearByPlaces = async (req, res) => {
  try {
    const nearByObject = req.body;
    const response = await erpServices.handleChangeDataTable(
      'NearByPlaces',
      nearByObject
    );
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handlePostChangeHotelImages = async (req, res) => {
  try {
    const { action, data } = req.body;
    let response;
    if (action === 'pickThumbnail') {
      response = await erpServices.handlePickThumbnailHotelImage(data);
    } else {
      response = await erpServices.handleChangeDataTable('HotelImages', {
        action,
        data,
      });
    }

    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handleChangeCustomerReviews = async (req, res) => {
  try {
    const { action, data } = req.body;
    const response = await erpServices.handleChangeDataTable(
      'CustomerReviews',
      { action, data }
    );
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handleChangeCustomerQuestions = async (req, res) => {
  try {
    const { action, data } = req.body;
    const response = await erpServices.handleChangeDataTable(
      'CustomerQuestions',
      { action, data }
    );
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handlePostChangePromotion = async (req, res) => {
  try {
    const { action, data } = req.body;
    const response = await erpServices.handleChangeDataTable('Promotions', {
      action,
      data,
    });
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handlePostChangePromotion2 = async (req, res) => {
  try {
    const { action, data } = req.body;
    const response = await erpServices.handleChangePromotion({ action, data });
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: e.message,
    });
  }
};

const handleGetCustomerQuestion = async (req, res) => {
  try {
    const response = await erpServices.getCustomerQuestion(req.query);
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
      count: response.count,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handleChangeUserInfo = async (req, res) => {
  try {
    const { action, data } = req.body;
    const response = await erpServices.handleChangeDataTable('Staffs', {
      action,
      data,
    });
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handlePostChangeWebsiteInfo = async (req, res) => {
  try {
    const { action, data } = req.body;
    const response = await erpServices.handleChangeDataTable('WebsiteInfos', {
      action,
      data,
    });
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handlePostChangeRoomsPrices = async (req, res) => {
  try {
    const { action, data } = req.body;
    const response = await erpServices.handleChangeDataTable(
      'RoomPrices',
      {
        action,
        data,
      },
      'RoomId'
    );
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

module.exports = {
  handleGetAllBookingInfo,
  handleReceptionActions,
  handleGetAllBookingDays,
  handlePostUpdateRooms,
  handlePostLoginStaff,
  handlePostHeroHeaders,
  handlePostHotelIntroduction,
  handlePostHotelInfo,
  handleDeleteRoomImage,
  handlePostChangeRoomThumbnail,
  handlePostNewRoomImage,
  handleDeleteRoom,
  handlePostNewChangeNearByPlaces,
  handleChangeCustomerReviews,
  handleGetCustomerQuestion,
  handleChangeCustomerQuestions,
  handleChangeUserInfo,
  handlePostChangePromotion,
  handlePostChangeRoomsPrices,
  handlePostChangeWebsiteInfo,
  handlePostChangeHotelImages,
  handleGetPaganition,
};
