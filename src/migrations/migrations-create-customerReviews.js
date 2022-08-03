'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CustomerReviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      HotelId: { type: Sequelize.INTEGER },
      NameVn: { type: Sequelize.STRING },
      NameEn: { type: Sequelize.STRING },
      NameCn: { type: Sequelize.STRING },
      CommentVn: { type: Sequelize.TEXT('long') },
      CommentEn: { type: Sequelize.TEXT('long') },
      CommentCn: { type: Sequelize.TEXT('long') },
      RatingNumber: { type: Sequelize.INTEGER },
      ThumbnailImageOnlineLink: { type: Sequelize.TEXT('long') },
      ReviewFrom: { type: Sequelize.STRING },
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
    await queryInterface.dropTable('CustomerReviews');
  },
};
