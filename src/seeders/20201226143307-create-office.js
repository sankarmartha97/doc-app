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
   await queryInterface.bulkInsert('offices', [
    {
      doctor_id: 18,
      hospital_affiliation_id: 4,
      time_slot_per_client_in_min: 33,
      first_consultation_fee: 1164,
      followup_consultation_fee: 355,
      street_address: "965 Jay Street",
      city: "Leland",
      state: "Northern Mariana Islands",
      country: "Ecuador",
      zip: 519695,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      doctor_id: 16,
      hospital_affiliation_id: 10,
      time_slot_per_client_in_min: 33,
      first_consultation_fee: 737,
      followup_consultation_fee: 225,
      street_address: "799 Ridge Court",
      city: "Guilford",
      state: "Florida",
      country: "Botswana",
      zip: 288348,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      doctor_id: 20,
      hospital_affiliation_id: 7,
      time_slot_per_client_in_min: 39,
      first_consultation_fee: 700,
      followup_consultation_fee: 671,
      street_address: "611 Ralph Avenue",
      city: "Sanders",
      state: "South Carolina",
      country: "Gambia",
      zip: 512562,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      doctor_id: 17,
      hospital_affiliation_id: 7,
      time_slot_per_client_in_min: 22,
      first_consultation_fee: 843,
      followup_consultation_fee: 137,
      street_address: "318 Newkirk Placez",
      city: "Beason",
      state: "Tennessee",
      country: "Morocco",
      zip: 259048,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      doctor_id: 13,
      hospital_affiliation_id: 2,
      time_slot_per_client_in_min: 32,
      first_consultation_fee: 702,
      followup_consultation_fee: 353,
      street_address: "830 Walker Court",
      city: "Orovada",
      state: "Nevada",
      country: "Korea (North)",
      zip: 569538,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      doctor_id: 19,
      hospital_affiliation_id: 4,
      time_slot_per_client_in_min: 25,
      first_consultation_fee: 692,
      followup_consultation_fee: 396,
      street_address: "589 College Place",
      city: "Bordelonville",
      state: "Rhode Island",
      country: "Palau",
      zip: 376228,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      doctor_id: 24,
      hospital_affiliation_id: 10,
      time_slot_per_client_in_min: 20,
      first_consultation_fee: 477,
      followup_consultation_fee: 779,
      street_address: "151 Nixon Court",
      city: "Retsof",
      state: "Vermont",
      country: "Kyrgyzstan",
      zip: 156117,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      doctor_id: 24,
      hospital_affiliation_id: 7,
      time_slot_per_client_in_min: 21,
      first_consultation_fee: 1166,
      followup_consultation_fee: 123,
      street_address: "799 Butler Street",
      city: "Bellfountain",
      state: "Maine",
      country: "Moldova",
      zip: 530908,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      doctor_id: 21,
      hospital_affiliation_id: 9,
      time_slot_per_client_in_min: 38,
      first_consultation_fee: 1136,
      followup_consultation_fee: 344,
      street_address: "105 Harman Street",
      city: "Cliff",
      state: "New Mexico",
      country: "Zaire",
      zip: 341422,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      doctor_id: 14,
      hospital_affiliation_id: 1,
      time_slot_per_client_in_min: 39,
      first_consultation_fee: 515,
      followup_consultation_fee: 259,
      street_address: "581 Lake Street",
      city: "Oley",
      state: "District Of Columbia",
      country: "Estonia",
      zip: 314839,
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('offices', null, {});
  }
};
