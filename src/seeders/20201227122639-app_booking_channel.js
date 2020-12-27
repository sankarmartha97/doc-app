'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('app_booking_channels', [{
    app_booking_channel_name: 'Mobile',
    createdAt : new Date(),
    updatedAt : new Date()
   },{
    app_booking_channel_name: 'Web',
    createdAt : new Date(),
    updatedAt : new Date()
   }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('app_booking_channels', null, {});
  }
};
