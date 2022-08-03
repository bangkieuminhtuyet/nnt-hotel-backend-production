const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const hotelControler = require('../controllers/hotelController');
const erpController = require('../controllers/erpController');
const authController = require('../controllers/authController');
const middlewareController = require('../controllers/middlewareController');

const initWebRoute = (app) => {
  //study
  app.post('/api/login', userController.handleLogin);
  app.post('/api/create-new-user', userController.handleCreateNewUser);
  app.post('/api/edit-user', userController.handleEditUser);

  //hotel

  app.get('/api/get-website-info', hotelControler.handleGetWebsiteInfo);

  app.get(
    '/api/get-hotel-introduction',
    hotelControler.handleGetHotelIntroduction
  );

  app.get('/api/get-all-hotel-images', hotelControler.handleGetAllHotelImages);
  app.get(
    '/api/get-rooms-price-thumbnail',
    hotelControler.handleGetRoomsPriceThumbnail
  );
  app.get(
    '/api/get-rooms-more-images',
    hotelControler.handleGetRoomsMoreImages
  );
  app.get('/api/get-near-by-places', hotelControler.handleGetNearByPlaces);
  app.get('/api/get-customer-reviews', hotelControler.handleGetCustomerReviews);
  app.post('/api/post-bookings', hotelControler.handlePostBookings);
  app.post(
    '/api/post-confirm-email-code',
    hotelControler.handlePostConfirmEmailCode
  );
  app.get('/api/get-hero-header', hotelControler.handleGetHeroHeaders);
  app.get('/api/get-hotel-info', hotelControler.handleGetHotelInfo);
  app.post(
    '/api/post-customer-question',
    hotelControler.handlePostCustomerQuestion
  );
  app.get('/api/get-all-promotions', hotelControler.handleGetAllPromotions);
  app.get(
    '/api/get-rooms-common-info',
    hotelControler.handleGetAllRoomsCommonInfo
  );

  app.get('/api/get-all-rooms-prices', hotelControler.handleGetAllRoomsPrices);
  //erp

  app.get(
    '/api/get-paganition',
    middlewareController.verifyToken,
    erpController.handleGetPaganition
  );
  app.get(
    '/api/get-all-booking-info',
    middlewareController.verifyToken,
    erpController.handleGetAllBookingInfo
  );
  app.post(
    '/api/post-reception-actions',
    middlewareController.verifyToken,
    erpController.handleReceptionActions
  );

  app.post(
    '/api/post-change-hotel-images',
    middlewareController.verifyTokenAndOwnerAcess,
    erpController.handlePostChangeHotelImages
  );
  app.get(
    '/api/get-all-booking-day',
    middlewareController.verifyToken,
    erpController.handleGetAllBookingDays
  );
  app.post(
    '/api/post-update-rooms',
    middlewareController.verifyTokenAndManagerAcess,
    erpController.handlePostUpdateRooms
  );
  app.post(
    '/api/delete-room-image',
    middlewareController.verifyTokenAndOwnerAcess,
    erpController.handleDeleteRoomImage
  );
  app.post(
    '/api/post-change-room-thumbnail',
    middlewareController.verifyTokenAndOwnerAcess,
    erpController.handlePostChangeRoomThumbnail
  );
  app.post(
    '/api/post-new-room-image',
    middlewareController.verifyTokenAndManagerAcess,
    erpController.handlePostNewRoomImage
  );
  app.post(
    '/api/delete-room',
    middlewareController.verifyTokenAndOwnerAcess,
    erpController.handleDeleteRoom
  );
  app.post(
    '/api/post-new-change-near-by-places',
    middlewareController.verifyTokenAndOwnerAcess,
    erpController.handlePostNewChangeNearByPlaces
  );
  app.post(
    '/api/post-hotel-info',
    middlewareController.verifyTokenAndOwnerAcess,
    erpController.handlePostHotelInfo
  );
  app.post(
    '/api/post-hero-headers',
    middlewareController.verifyTokenAndOwnerAcess,
    erpController.handlePostHeroHeaders
  );
  app.post(
    '/api/post-hotel-introduction',
    middlewareController.verifyTokenAndOwnerAcess,
    erpController.handlePostHotelIntroduction
  );

  app.post(
    '/api/post-change-customer-reviews',
    middlewareController.verifyTokenAndOwnerAcess,
    erpController.handleChangeCustomerReviews
  );
  app.get(
    '/api/get-customer-question',
    middlewareController.verifyToken,
    erpController.handleGetCustomerQuestion
  );
  app.post(
    '/api/post-change-customer-questions',
    middlewareController.verifyToken,
    erpController.handleChangeCustomerQuestions
  );

  app.post(
    '/api/post-promotion',
    middlewareController.verifyTokenAndOwnerAcess,
    erpController.handlePostChangePromotion
  );

  app.post('/');

  app.post(
    '/api/post-change-rooms-prices',
    middlewareController.verifyTokenAndManagerAcess,
    erpController.handlePostChangeRoomsPrices
  );

  app.post(
    '/api/post-change-website-info',
    middlewareController.verifyTokenAndOwnerAcess,
    erpController.handlePostChangeWebsiteInfo
  );
  //auth
  app.post('/api/post-login-staff', authController.handlePostLoginStaff);
  app.get(
    '/api/get-all-users',
    middlewareController.verifyTokenAndOwnerAcess,
    authController.handleGetAllUsers
  );
  app.post(
    '/api/change-user-info',
    middlewareController.verifyTokenAndOwnerAcess,
    erpController.handleChangeUserInfo
  );
  app.post(
    '/api/post-create-staff',
    middlewareController.verifyTokenAndFullAccess,
    authController.handleCreateNewStaff
  );
  app.post('/api/post-refresh-jwt', authController.handleRefreshJWT);

  return app.use('/', router);
};

module.exports = initWebRoute;
