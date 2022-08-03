'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rooms.belongsTo(models.Hotels, {
        foreignKey: 'HotelId',
        targetKey: 'id',
        as: 'HotelRoomsData',
      });
      Rooms.hasMany(models.RoomImages, {
        foreignKey: 'RoomId',
        as: 'RoomsRoomImagesData',
      });
      Rooms.hasMany(models.RoomPrices, {
        foreignKey: 'RoomId',
        as: 'RoomsRoomPricesData',
      });
    }
  }
  Rooms.init(
    {
      NameVn: DataTypes.STRING,
      NameEn: DataTypes.STRING,
      NameCn: DataTypes.STRING,
      AvailableNumber: DataTypes.INTEGER,
      HotelId: DataTypes.INTEGER,
      CustomerPerMonth: DataTypes.INTEGER,
      OrderDisplay: DataTypes.INTEGER,
      //new
      ShortDescriptionVn: DataTypes.TEXT('long'),
      ShortDescriptionEn: DataTypes.TEXT('long'),
      LongDescriptionVn: DataTypes.TEXT('long'),
      LongDescriptionEn: DataTypes.TEXT('long'),
      Square: DataTypes.STRING,

      //new
      WindowsVn: DataTypes.STRING,
      WindowsEn: DataTypes.STRING,
      BedSizeVn: DataTypes.STRING,
      BedSizeEn: DataTypes.STRING,

      //new
      isActive: DataTypes.BOOLEAN,
      isDeleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Rooms',
    }
  );
  return Rooms;
};
