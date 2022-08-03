'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    //1. Sửa tên ở đây:
    await queryInterface.createTable('NearByPlaces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // Begin: Paste ------------------
      HotelId: { type: Sequelize.INTEGER },
      NameVn: { type: Sequelize.STRING },
      NameEn: { type: Sequelize.STRING },
      NameCn: { type: Sequelize.STRING },
      AddressVn: { type: Sequelize.TEXT('long') },
      AddressEn: { type: Sequelize.TEXT('long') },
      AddressCn: { type: Sequelize.TEXT('long') },
      Distance: { type: Sequelize.INTEGER },
      MapLink: { type: Sequelize.TEXT('long') },
      ImageOnlineLink: { type: Sequelize.TEXT('long') },
      isDeleted: { type: Sequelize.BOOLEAN },
      isActive: { type: Sequelize.BOOLEAN },
      // End Paste ------------------
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
    await queryInterface.dropTable('NearByPlaces');
  },
};

// 3. Chạy câu lệnh :    npx sequelize-cli db:migrate
