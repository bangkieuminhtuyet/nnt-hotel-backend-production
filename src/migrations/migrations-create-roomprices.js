'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RoomPrices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      RoomId: { type: Sequelize.INTEGER },
      HotelId: { type: Sequelize.INTEGER },
      HourBeforePrice: { type: Sequelize.STRING },
      HourWebPrice: { type: Sequelize.STRING },
      OverNightBeforePrice: { type: Sequelize.STRING },
      OverNightWebPrice: { type: Sequelize.STRING },
      DayNightBeforePrice: { type: Sequelize.STRING },
      DayNightWebPrice: { type: Sequelize.STRING },
      isDeleted: { type: Sequelize.BOOLEAN },
      isActive: { type: Sequelize.BOOLEAN },
      isDiscount: { type: Sequelize.BOOLEAN },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RoomPrices');
  },
};
