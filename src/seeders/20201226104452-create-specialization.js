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
   await queryInterface.bulkInsert('specializations', [{
    name: 'Acupuncture',
    createdAt : new Date(),
    updatedAt : new Date()
  },{
    name: 'Allergist/Immunologist',    
    createdAt : new Date(),
    updatedAt : new Date()
  },{
    name: 'Anesthesiologist',
    createdAt : new Date(),
    updatedAt : new Date()
  },{
    name: 'Audiologist',    
    createdAt : new Date(),
    updatedAt : new Date()
  },{
    name: 'Ayurveda',
    createdAt : new Date(),
    updatedAt : new Date()
  },{
    name: 'Cardiac Electrophysiologist',    
    createdAt : new Date(),
    updatedAt : new Date()
  },{
    name: 'Cardiologist',
    createdAt : new Date(),
    updatedAt : new Date()
  },{
    name: 'Cardiothoracic Surgeon',    
    createdAt : new Date(),
    updatedAt : new Date()
  },{
    name: 'Colorectal Surgeon',
    createdAt : new Date(),
    updatedAt : new Date()
  },{
    name: 'Cosmetic Surgeon',    
    createdAt : new Date(),
    updatedAt : new Date()
  },{
    name: 'Dentist',
    createdAt : new Date(),
    updatedAt : new Date()
  },{
    name: 'Dermatologist',    
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
    await queryInterface.bulkDelete('specializations', nul, {});
  }
};
