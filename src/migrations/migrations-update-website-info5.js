'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('WebsiteInfos', 'InstagramLink', {
        type: Sequelize.TEXT('long'),
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('WebsiteInfos', 'InstagramLink', {
        type: Sequelize.TEXT('long'),
        allowNull: true,
      }),
    ]);
  },
};
