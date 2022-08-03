'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HotelIntroductions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // HotelId: { type: Sequelize.INTEGER },
      ValueVn: { type: Sequelize.TEXT('long') },
      ValueEn: { type: Sequelize.TEXT('long') },
      ValueCn: { type: Sequelize.TEXT('long') },
      ImgBlob: { type: Sequelize.TEXT('long') },
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
    await queryInterface.dropTable('HotelIntroductions');
  },
};
