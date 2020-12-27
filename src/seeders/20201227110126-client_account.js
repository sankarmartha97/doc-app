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
   await queryInterface.bulkInsert('client_accounts', [{
    first_name: "Leanna",
    last_name: "Miskin",
    email: "lmiskin0@yale.edu",
    contact_number: "330 176 4583",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    first_name: "Esdras",
    last_name: "McRuvie",
    email: "emcruvie1@berkeley.edu",
    contact_number: "237 279 9952",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    first_name: "Rad",
    last_name: "McIlory",
    email: "rmcilory2@canalblog.com",
    contact_number: "298 710 7325",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    first_name: "Ronny",
    last_name: "Akenhead",
    email: "rakenhead3@goo.gl",
    contact_number: "824 645 5979",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    first_name: "Job",
    last_name: "Cunniffe",
    email: "jcunniffe4@youtu.be",
    contact_number: "302 137 4961",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    first_name: "Toiboid",
    last_name: "Bointon",
    email: "tbointon5@engadget.com",
    contact_number: "673 676 5215",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    first_name: "Aubree",
    last_name: "Strowther",
    email: "astrowther6@tuttocitta.it",
    contact_number: "506 611 1973",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    first_name: "Charlotte",
    last_name: "Cordey",
    email: "ccordey7@github.com",
    contact_number: "936 230 4492",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    first_name: "Walton",
    last_name: "Squibbes",
    email: "wsquibbes8@bbb.org",
    contact_number: "941 504 2447",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    first_name: "Kennie",
    last_name: "Pawlick",
    email: "kpawlick9@ezinearticles.com",
    contact_number: "228 211 9874",
    createdAt : new Date(),
    updatedAt : new Date()
  }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('client_accounts', null, {});
  }
};
