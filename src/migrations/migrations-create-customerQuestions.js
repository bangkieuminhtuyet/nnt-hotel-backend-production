'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CustomerQuestions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Name: { type: Sequelize.STRING },
      Phone: { type: Sequelize.INTEGER },
      Email: { type: Sequelize.STRING },
      Message: { type: Sequelize.TEXT('long') },
      isReadByReception: { type: Sequelize.BOOLEAN },
      isReadByManager: { type: Sequelize.BOOLEAN },
      NoteByReception: { type: Sequelize.TEXT('long') },
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
    await queryInterface.dropTable('CustomerQuestions');
  },
};
