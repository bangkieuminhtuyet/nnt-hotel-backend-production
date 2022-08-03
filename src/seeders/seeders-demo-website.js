'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    //1. Sửa tên ở đây
    return queryInterface.bulkInsert('HotelImages', [
      {
        HotelId: 3,
        Image: 'https://i.ibb.co/V9Dg7dX/matt-jones-9-CPAj-GVB378-unsplash.jpg',
        isThumbnail: false,
        isDeleted: false,
        isActive: true,
      },
    ]);
  },
  // 3. Chạy câu lệnh seeding :    npx sequelize-cli db:seed:all

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
