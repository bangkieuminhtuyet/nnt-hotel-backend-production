'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RoomImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Image: { type: Sequelize.TEXT('long') },
      HotelId: { type: Sequelize.INTEGER },
      RoomId: { type: Sequelize.INTEGER },
      ImageOnlineLink: { type: Sequelize.TEXT('long') },
      isDeleted: { type: Sequelize.BOOLEAN },
      isThumbnail: { type: Sequelize.BOOLEAN },
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
    await queryInterface.dropTable('RoomImages');
  },
};
