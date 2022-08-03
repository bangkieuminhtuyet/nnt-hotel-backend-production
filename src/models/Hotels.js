'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotels extends Model {
    static associate(models) {
      Hotels.hasMany(models.Rooms, {
        foreignKey: 'HotelId',
        as: 'HotelRoomsData',
      });
      Hotels.hasMany(models.RoomImages, {
        foreignKey: 'HotelId',
        as: 'HotelRoomImageData',
      });
      Hotels.hasMany(models.RoomPrices, {
        foreignKey: 'HotelId',
        as: 'HotelsRoomPricesData',
      });
      Hotels.hasMany(models.NearByPlaces, {
        foreignKey: 'HotelId',
        as: 'HotelNearByPlacesData',
      });
    }
  }
  Hotels.init(
    {
      NameVn: DataTypes.STRING,
      NameEn: DataTypes.STRING,
      NameCn: DataTypes.STRING,
      ReceptionPhone: DataTypes.STRING,
      AddressVn: DataTypes.STRING,
      AddressEn: DataTypes.STRING,
      AddressCn: DataTypes.STRING,
      LinkOnMap: DataTypes.STRING,
      LinkIFrame: DataTypes.TEXT('long'),
      Email: DataTypes.STRING,
      MarketingPhone: DataTypes.STRING,
      ImgBlob: DataTypes.TEXT('long'),
      OrderDisplay: DataTypes.INTEGER,

      NumberFloors: DataTypes.INTEGER,
      CustomerPerMonth: DataTypes.INTEGER,
      NumberRooms: DataTypes.INTEGER,
      NumberStaffs: DataTypes.INTEGER,

      HotelIntroEditorContentVn: DataTypes.TEXT('long'),
      HotelIntroHtmlContentVn: DataTypes.TEXT('long'),
      HotelIntroEditorContentEn: DataTypes.TEXT('long'),
      HotelIntroHtmlContentEn: DataTypes.TEXT('long'),

      isActive: DataTypes.BOOLEAN,
      isDeleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Hotels',
    }
  );
  return Hotels;
};
