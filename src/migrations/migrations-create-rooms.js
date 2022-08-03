'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      NameVn: {
        type: Sequelize.STRING,
      },
      NameEn: {
        type: Sequelize.STRING,
      },
      NameCn: {
        type: Sequelize.STRING,
      },
      AvailableNumber: {
        type: Sequelize.INTEGER,
      },
      HotelId: {
        type: Sequelize.STRING,
      },
      CustomerPerMonth: {
        type: Sequelize.INTEGER,
      },
      OrderDisplay: {
        type: Sequelize.INTEGER,
      },
      //new
      ShortDescriptionVn: {
        type: Sequelize.TEXT('long'),
      },
      ShortDescriptionEn: {
        type: Sequelize.TEXT('long'),
      },
      LongDescriptionVn: {
        type: Sequelize.TEXT('long'),
      },
      LongDescriptionEn: {
        type: Sequelize.TEXT('long'),
      },
      Square: {
        type: Sequelize.STRING,
      },

      WindowsVn: {
        type: Sequelize.STRING,
      },
      BedSizeVn: {
        type: Sequelize.STRING,
      },
      WindowsEn: {
        type: Sequelize.STRING,
      },
      BedSizeEn: {
        type: Sequelize.STRING,
      },

      //new
      isActive: {
        type: Sequelize.BOOLEAN,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
      },
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
    await queryInterface.dropTable('Rooms');
  },
};
