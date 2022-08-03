'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeroHeaders extends Model {
    static associate(models) {
      // define association here
      HeroHeaders.belongsTo(models.Hotels, {
        foreignKey: 'HotelId',
        targetKey: 'id',
        as: 'HotelHeroHeadersData',
      });
    }
  }
  HeroHeaders.init(
    {
      HotelId: DataTypes.STRING,
      ImgBlob: DataTypes.TEXT('long'),
      ImgLink: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
      isDeleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'HeroHeaders',
    }
  );
  return HeroHeaders;
};
