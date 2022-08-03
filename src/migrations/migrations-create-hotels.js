'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hotels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      NameVn: { type: Sequelize.STRING },
      NameEn: { type: Sequelize.STRING },
      NameCn: { type: Sequelize.STRING },
      ReceptionPhone: { type: Sequelize.STRING },
      AddressVn: { type: Sequelize.STRING },
      AddressEn: { type: Sequelize.STRING },
      AddressCn: { type: Sequelize.STRING },
      ImgBlob: { type: Sequelize.TEXT('long') }, //new
      Email: { type: Sequelize.STRING }, //new
      MarketingPhone: { type: Sequelize.STRING }, //new
      LinkOnMap: { type: Sequelize.STRING },
      LinkIFrame: { type: Sequelize.TEXT('long') }, //new
      OrderDisplay: { type: Sequelize.INTEGER },

      NumberFloors: { type: Sequelize.INTEGER },
      CustomerPerMonth: { type: Sequelize.INTEGER },
      NumberRooms: { type: Sequelize.INTEGER },
      NumberStaffs: { type: Sequelize.INTEGER },

      HotelIntroEditorContentVn: { type: Sequelize.TEXT('long') },
      HotelIntroHtmlContentVn: { type: Sequelize.TEXT('long') },
      HotelIntroEditorContentEn: { type: Sequelize.TEXT('long') },
      HotelIntroHtmlContentEn: { type: Sequelize.TEXT('long') },

      isActive: { type: Sequelize.BOOLEAN },
      isDeleted: { type: Sequelize.BOOLEAN },
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
    await queryInterface.dropTable('Hotels');
  },
};
