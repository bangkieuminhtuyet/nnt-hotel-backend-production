const db = require('../models/index');
const hotelService = require('../services/hotelService.js');

const handleGetWebsiteInfo = async (req, res) => {
  try {
    const response = await hotelService.getOneInfoFromTable('WebsiteInfos');
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handleGetAllHotelImages = async (req, res) => {
  try {
    const response = await hotelService.getAllInfoFromTable('HotelImages');
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

const handleGetHotelIntroduction = async (req, res) => {
  try {
    const response = await hotelService.getHotelIntroduction();
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handleGetRoomsPriceThumbnail = async (req, res) => {
  try {
    const HotelId = req.query.HotelId;
    const response = await hotelService.getRoomslPriceThumbnail(HotelId);
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

const handleGetRoomsMoreImages = async (req, res) => {
  try {
    const RoomId = req.query.RoomId;
    const response = await hotelService.getRoomsMoreImages(RoomId);
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

const handleGetNearByPlaces = async (req, res) => {
  try {
    const HotelId = req.query.HotelId;
    const response = await hotelService.getNearByPlaces(HotelId);
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

const handleGetCustomerReviews = async (req, res) => {
  try {
    const response = await hotelService.getCustomerReviews();
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

const handlePostBookings = async (req, res) => {
  try {
    const bookingInfo = req.body;
    const response = await hotelService.postBookings(bookingInfo);
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

const handlePostConfirmEmailCode = async (req, res) => {
  try {
    const confirmObject = req.body.confirmObject;
    const response = await hotelService.postConfirmEmailCode(confirmObject);
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

const handleGetHeroHeaders = async (req, res) => {
  try {
    const response = await hotelService.getHeroHeaders();
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

const handleGetHotelInfo = async (req, res) => {
  try {
    const hotelId = req.query.HotelId;
    const response = await hotelService.getHotelInfo(hotelId);
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

const handlePostCustomerQuestion = async (req, res) => {
  try {
    const questionObject = req.body;
    const response = await hotelService.postCustomerQuestion(questionObject);
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

const handleGetAllPromotions = async (req, res) => {
  try {
    const { Type } = req.query;
    const response = await hotelService.getAllPromotions(Type);
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

const handleGetAllRoomsCommonInfo = async (req, res) => {
  try {
    const { HotelId } = req.query;
    const response = await hotelService.getAllRoomsCommonInfo(HotelId);
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

const handleGetAllRoomsPrices = async (req, res) => {
  try {
    const { HotelId } = req.query;
    const response = await hotelService.getAllRoomsPrices(HotelId);
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
  handleGetHotelIntroduction,
  handleGetRoomsPriceThumbnail,
  handleGetRoomsMoreImages,
  handleGetNearByPlaces,
  handleGetCustomerReviews,
  handlePostBookings,
  handlePostConfirmEmailCode,
  handleGetHeroHeaders,
  handleGetHotelInfo,
  handlePostCustomerQuestion,
  handleGetAllPromotions,
  handleGetAllRoomsCommonInfo,
  handleGetAllRoomsPrices,
  handleGetWebsiteInfo,
  handleGetAllHotelImages,
};
