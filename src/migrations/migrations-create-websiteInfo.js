'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WebsiteInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      NNTDetailRawVn: { type: Sequelize.TEXT('long') },
      NNTDetailHTMLVn: { type: Sequelize.TEXT('long') },
      NNTDetailRawEn: { type: Sequelize.TEXT('long') },
      NNTDetailHTMLEn: { type: Sequelize.TEXT('long') },
      WebsiteImage: { type: Sequelize.TEXT('long') },
      MarketingPhone: { type: Sequelize.STRING },
      MarketingEmail: { type: Sequelize.STRING },
      FacebookLink: { type: Sequelize.TEXT('long') },
      ZaloLink: { type: Sequelize.TEXT('long') },
      InstagramLink: { type: Sequelize.TEXT('long') },
      isActive: { type: Sequelize.BOOLEAN },
      isDeleted: { type: Sequelize.BOOLEAN },

      //new
      HotelRulesEditorContentVn: { type: Sequelize.TEXT('long') },
      HotelRulesHtmlContentVn: { type: Sequelize.TEXT('long') },
      HotelRulesEditorContentEn: { type: Sequelize.TEXT('long') },
      HotelRulesHtmlContentEn: { type: Sequelize.TEXT('long') },

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
    await queryInterface.dropTable('WebsiteInfos');
  },
};
