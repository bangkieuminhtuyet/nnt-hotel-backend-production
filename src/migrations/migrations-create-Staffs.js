'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Staffs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      FullName: { type: Sequelize.STRING },
      DisplayName: { type: Sequelize.STRING },
      Role: { type: Sequelize.STRING },
      UserName: { type: Sequelize.STRING },
      Password: { type: Sequelize.STRING },
      HotelId: { type: Sequelize.INTEGER },
      HotelName: { type: Sequelize.STRING },
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
    await queryInterface.dropTable('Staffs');
  },
};
