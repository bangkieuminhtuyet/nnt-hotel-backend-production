'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomPrices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RoomPrices.belongsTo(models.Rooms, {
        foreignKey: 'RoomId',
        targetKey: 'id',
        as: 'RoomsRoomPricesData',
      });
      RoomPrices.belongsTo(models.Hotels, {
        foreignKey: 'HotelId',
        targetKey: 'id',
        as: 'HotelsRoomPricesData',
      });
    }
  }
  RoomPrices.init(
    {
      RoomId: DataTypes.INTEGER,
      HotelId: DataTypes.INTEGER,
      HourBeforePrice: DataTypes.STRING,
      HourWebPrice: DataTypes.STRING,
      OverNightBeforePrice: DataTypes.STRING,
      OverNightWebPrice: DataTypes.STRING,
      DayNightBeforePrice: DataTypes.STRING,
      DayNightWebPrice: DataTypes.STRING,
      isDeleted: DataTypes.BOOLEAN,
      isDiscount: DataTypes.BOOLEAN,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'RoomPrices',
    }
  );
  return RoomPrices;
};
