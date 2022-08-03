'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RoomImages.belongsTo(models.Hotels, {
        foreignKey: 'HotelId',
        targetKey: 'id',
        as: 'HotelRoomImageData',
      });
      RoomImages.belongsTo(models.Rooms, {
        foreignKey: 'RoomId',
        targetKey: 'id',
        as: 'RoomsRoomImagesData',
      });
    }
  }
  RoomImages.init(
    {
      Image: DataTypes.TEXT('long'),
      HotelId: DataTypes.INTEGER,
      RoomId: DataTypes.INTEGER,
      ImageOnlineLink: DataTypes.TEXT('long'),
      isDeleted: DataTypes.BOOLEAN,
      isThumbnail: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'RoomImages',
    }
  );
  return RoomImages;
};
