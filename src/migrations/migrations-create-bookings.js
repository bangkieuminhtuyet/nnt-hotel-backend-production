'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      HotelId: { type: Sequelize.INTEGER },
      HotelName: { type: Sequelize.STRING },
      CustomerName: { type: Sequelize.STRING },
      CustomerPhone: { type: Sequelize.STRING },
      CustomerEmail: { type: Sequelize.STRING },
      StayType: { type: Sequelize.STRING },
      RoomBookedList: { type: Sequelize.TEXT('long') },
      AdultNumber: { type: Sequelize.INTEGER },
      ChildrenNumber: { type: Sequelize.INTEGER },
      NoteForHotel: { type: Sequelize.TEXT('long') },
      CheckInDate: { type: Sequelize.DATEONLY },
      CheckInTime: { type: Sequelize.TIME },
      CheckOutDate: { type: Sequelize.DATEONLY },
      CheckOutTime: { type: Sequelize.TIME },
      DayBooked: { type: Sequelize.INTEGER },
      TotalMoneyBooked: { type: Sequelize.INTEGER },
      isDeleted: { type: Sequelize.BOOLEAN },
      isMailConfirm: { type: Sequelize.BOOLEAN },
      MailConfirmCode: { type: Sequelize.STRING },

      isCustomerCheckIn: { type: Sequelize.BOOLEAN },
      isReceptionAccept: { type: Sequelize.BOOLEAN },
      ReceptionAcceptTime: { type: Sequelize.DATE },
      CustomerCheckInTime: { type: Sequelize.DATE },
      CustomerDepositMoney: { type: Sequelize.STRING },
      BookingCode: { type: Sequelize.STRING },

      //--------------
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  },
};
