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
   await queryInterface.bulkInsert('qualifications', [{
      name: "Updos",
      institute_name: "University of Huddersfield",
      procurement_year: "09/02/2020",
      doctor_id: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, {
      name: "Citrix XenApp",
      institute_name: "Universidad de Jaén",
      procurement_year: "26/09/2012",
      doctor_id: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, {
      name: "GSS",
      institute_name: "Gaziosmanpasa University",
      procurement_year: "07/09/2020",
      doctor_id: 3,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, {
      name: "Russian",
      institute_name: "Athabasca University",
      procurement_year: "28/07/2010",
      doctor_id: 4,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, {
      name: "HAZOP Study",
      institute_name: "Shanghai Lida Polytechnic Institute",
      procurement_year: "15/05/2013",
      doctor_id: 5,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, {
      name: "PFD",
      institute_name: "Bells University of Technology",
      procurement_year: "22/02/2002",
      doctor_id: 6,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, {
      name: "FMCG",
      institute_name: "KROK Economics and Law University",
      procurement_year: "20/12/2010",
      doctor_id: 7,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, {
      name: "Working With Children",
      institute_name: "Hardin-Simmons University",
      procurement_year: "04/05/2020",
      doctor_id: 8,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, {
      name: "Union",
      institute_name: "Yokohama College of Commerce",
      procurement_year: "30/04/2003",
      doctor_id: 9,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, {
      name: "Crisis Communications",
      institute_name: "University of the Cordilleras",
      procurement_year: "26/08/2010",
      doctor_id: 10,
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('qualifications', null, {});
  }
};
