'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Promotions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      TitleVn: { type: Sequelize.STRING },
      SubTitleVn: { type: Sequelize.TEXT('long') },
      EditorContentVn: { type: Sequelize.TEXT('long') },
      HtmlContentVn: { type: Sequelize.TEXT('long') },

      TitleEn: { type: Sequelize.STRING },
      SubTitleEn: { type: Sequelize.TEXT('long') },
      EditorContentEn: { type: Sequelize.TEXT('long') },
      HtmlContentEn: { type: Sequelize.TEXT('long') },

      Thumbnail: { type: Sequelize.TEXT('long') },
      isPopUp: { type: Sequelize.BOOLEAN },
      isDeleted: { type: Sequelize.BOOLEAN },
      isActive: { type: Sequelize.BOOLEAN },

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
    await queryInterface.dropTable('Promotions');
  },
};
