'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Hotels', 'HotelIntroHtmlContentEn', {
        type: Sequelize.TEXT('long'),
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Hotels', 'HotelIntroHtmlContentEn', {
        type: Sequelize.TEXT('long'),
        allowNull: true,
      }),
    ]);
  },
};
