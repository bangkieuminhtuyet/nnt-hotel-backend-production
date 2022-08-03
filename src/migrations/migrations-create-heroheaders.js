'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HeroHeaders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      HotelId: { type: Sequelize.STRING },
      ImgBlob: { type: Sequelize.TEXT('long') },
      ImgLink: { type: Sequelize.STRING },
      isActive: { type: Sequelize.BOOLEAN },
      isDeleted: { type: Sequelize.BOOLEAN },
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
    await queryInterface.dropTable('HeroHeaders');
  },
};
