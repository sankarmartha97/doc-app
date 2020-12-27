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
   await queryInterface.bulkInsert('appointment_statuses', [{
    status: false,
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    status: false,
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    status: true,
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    status: true,
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    status: false,
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    status: false,
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    status: false,
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    status: true,
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    status: true,
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    status: true,
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
    await queryInterface.bulkDelete('appointment_statuses', null, {});
  }
};
