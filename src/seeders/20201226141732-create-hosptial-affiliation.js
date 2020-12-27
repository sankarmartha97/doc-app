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
   await queryInterface.bulkInsert('hosptial_affiliations', [{
    hospital_name: "Dr Elena M Morreale",
    start_date: "03/10/2009",
    doctor_id: 1,
    city: "Chokwé",
    countery: "Mozambique",
    createdAt : new Date(),
    updatedAt : new Date(),
    end_date: "13/08/2002"
  }, {
    hospital_name: "PD-Rx Pharmaceuticals, Inc.",
    start_date: "04/03/2004",
    doctor_id: 2,
    city: "Czemierniki",
    countery: "Poland",
    createdAt : new Date(),
    updatedAt : new Date(),
    end_date: "04/08/2008"
  }, {
    hospital_name: "Cardinal Health",
    start_date: "29/09/2006",
    doctor_id: 3,
    city: "Sulaco",
    countery: "Honduras",
    createdAt : new Date(),
    updatedAt : new Date(),
    end_date: "04/10/2007"
  }, {
    hospital_name: "American Sales Company",
    start_date: "02/06/2010",
    doctor_id: 4,
    city: "Roche-à-Bateau",
    countery: "Haiti",
    createdAt : new Date(),
    updatedAt : new Date(),
    end_date: "03/05/2002"
  }, {
    hospital_name: "HEB",
    start_date: "14/12/2006",
    doctor_id: 5,
    city: "Cuenca",
    countery: "Ecuador",
    createdAt : new Date(),
    updatedAt : new Date(),
    end_date: "06/10/2003"
  }, {
    hospital_name: "Lupin Pharmaceuticals, Inc.",
    start_date: "15/11/2003",
    doctor_id: 6,
    city: "Malasugui",
    countery: "Philippines",
    createdAt : new Date(),
    updatedAt : new Date(),
    end_date: "22/02/2001"
  }, {
    hospital_name: "Supervalu Inc",
    start_date: "26/05/2005",
    doctor_id: 7,
    city: "Várzea da Palma",
    countery: "Brazil",
    createdAt : new Date(),
    updatedAt : new Date(),
    end_date: "27/09/2007"
  }, {
    hospital_name: "GlaxoSmithKline LLC",
    start_date: "06/08/2010",
    doctor_id: 8,
    city: "Uubulan",
    countery: "Mongolia",
    createdAt : new Date(),
    updatedAt : new Date(),
    end_date: "03/06/2007"
  }, {
    hospital_name: "Johnson & Johnson Consumer Products Company, Division of Johnson & Johnson Consumer Companies, Inc.",
    start_date: "01/02/2000",
    doctor_id: 9,
    city: "Pārūn",
    countery: "Afghanistan",
    createdAt : new Date(),
    updatedAt : new Date(),
    end_date: "28/02/2004"
  }, {
    hospital_name: "Kroger Co.",
    start_date: "19/12/2006",
    doctor_id: 10,
    city: "Ubinskoye",
    countery: "Russia",
    createdAt : new Date(),
    updatedAt : new Date(),
    end_date: "05/06/2004"
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('hosptial_affiliations', null, {});
  }
};
