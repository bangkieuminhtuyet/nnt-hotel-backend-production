'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HotelImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      HotelImages.belongsTo(models.Hotels, {
        foreignKey: 'HotelId',
        targetKey: 'id',
        as: 'HotelHotelImagesData',
      });
    }
  }
  HotelImages.init(
    {
      HotelId: DataTypes.INTEGER,
      Image: DataTypes.TEXT('long'),
      isThumbnail: DataTypes.BOOLEAN,
      isDeleted: DataTypes.BOOLEAN,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'HotelImages',
    }
  );
  return HotelImages;
};
