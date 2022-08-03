'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NearByPlaces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NearByPlaces.belongsTo(models.Hotels, {
        foreignKey: 'HotelId',
        targetKey: 'id',
        as: 'HotelNearByPlacesData',
      });
    }
  }
  NearByPlaces.init(
    {
      HotelId: DataTypes.INTEGER,
      NameVn: DataTypes.STRING,
      NameEn: DataTypes.STRING,
      NameCn: DataTypes.STRING,
      AddressVn: DataTypes.TEXT('long'),
      AddressEn: DataTypes.TEXT('long'),
      AddressCn: DataTypes.TEXT('long'),
      Distance: DataTypes.INTEGER,
      MapLink: DataTypes.TEXT('long'),
      ImageOnlineLink: DataTypes.TEXT('long'),
      isDeleted: DataTypes.BOOLEAN,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'NearByPlaces',
    }
  );
  return NearByPlaces;
};
