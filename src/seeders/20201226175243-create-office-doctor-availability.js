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
   await queryInterface.bulkInsert('office_doctor_availabilities',[
    {
      office_id: 10,
      day_of_week: "Monday",
      start_time: "08:31",
      end_time: "12:16",
      is_available: false,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      office_id: 4,
      day_of_week: "Sunday",
      start_time: "11:18",
      end_time: "09:03",
      is_available: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      office_id: 2,
      day_of_week: "Monday",
      start_time: "04:18",
      end_time: "10:55",
      is_available: false,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      office_id: 2,
      day_of_week: "Sunday",
      start_time: "02:15",
      end_time: "07:06",
      is_available: false,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      office_id: 1,
      day_of_week: "Wednesday",
      start_time: "10:38",
      end_time: "08:47",
      is_available: false,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      office_id: 7,
      day_of_week: "Sunday",
      start_time: "11:18",
      end_time: "06:23",
      is_available: false,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      office_id: 3,
      day_of_week: "Sunday",
      start_time: "01:19",
      end_time: "01:09",
      is_available: false,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      office_id: 4,
      day_of_week: "Monday",
      start_time: "12:23",
      end_time: "05:34",
      is_available: false,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      office_id: 9,
      day_of_week: "Friday",
      start_time: "11:10",
      end_time: "10:12",
      is_available: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      office_id: 8,
      day_of_week: "Friday",
      start_time: "02:04",
      end_time: "12:09",
      is_available: true,
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ] , {})

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('office_doctor_availabilities', null, {});
  }
};
