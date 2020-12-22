'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctor_id: {
        type: Sequelize.INTEGER
      },
      hospital_affiliation_id: {
        type: Sequelize.INTEGER
      },
      time_slot_per_client_in_min: {
        type: Sequelize.INTEGER
      },
      first_consultation_fee: {
        type: Sequelize.INTEGER
      },
      followup_consultation_fee: {
        type: Sequelize.INTEGER
      },
      street_address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('offices');
  }
};