'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    static associate(models) {
      // define association here
      Bookings.belongsTo(models.Hotels, {
        foreignKey: 'HotelId',
        targetKey: 'id',
        as: 'HotelBookingsData',
      });
    }
  }
  Bookings.init(
    {
      HotelId: DataTypes.INTEGER,
      HotelName: DataTypes.STRING,
      CustomerName: DataTypes.STRING,
      CustomerPhone: DataTypes.STRING,
      CustomerEmail: DataTypes.STRING,
      StayType: DataTypes.STRING,
      RoomBookedList: DataTypes.TEXT('long'),
      AdultNumber: DataTypes.INTEGER,
      ChildrenNumber: DataTypes.INTEGER,
      NoteForHotel: DataTypes.TEXT('long'),
      CheckInDate: DataTypes.DATEONLY,
      CheckInTime: DataTypes.TIME,
      CheckOutDate: DataTypes.DATEONLY,
      CheckOutTime: DataTypes.TIME,
      DayBooked: DataTypes.INTEGER,
      TotalMoneyBooked: DataTypes.INTEGER,
      isDeleted: DataTypes.BOOLEAN,
      isMailConfirm: DataTypes.BOOLEAN,
      MailConfirmCode: DataTypes.STRING,

      isCustomerCheckIn: DataTypes.BOOLEAN,
      isReceptionAccept: DataTypes.BOOLEAN,
      ReceptionAcceptTime: DataTypes.DATE,
      CustomerCheckInTime: DataTypes.DATE,
      CustomerDepositMoney: DataTypes.STRING,
      BookingCode: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Bookings',
    }
  );
  return Bookings;
};
