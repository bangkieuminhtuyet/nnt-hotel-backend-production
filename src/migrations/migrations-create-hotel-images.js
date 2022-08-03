'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HotelImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      HotelId: { type: Sequelize.INTEGER },
      Image: { type: Sequelize.TEXT('long') },
      isThumbnail: { type: Sequelize.BOOLEAN },
      isDeleted: { type: Sequelize.BOOLEAN },
      isActive: { type: Sequelize.BOOLEAN },

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
    await queryInterface.dropTable('HotelImages');
  },
};
