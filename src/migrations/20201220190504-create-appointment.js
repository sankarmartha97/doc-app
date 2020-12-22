'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_account_id: {
        type: Sequelize.INTEGER
      },
      office_id: {
        type: Sequelize.INTEGER
      },
      probable_start_time: {
        type: Sequelize.DATE
      },
      actual_end_time: {
        type: Sequelize.DATE
      },
      appointment_status_id: {
        type: Sequelize.NUMBER
      },
      appointment_taken_Date: {
        type: Sequelize.DATE
      },
      app_booking_channel_id: {
        type: Sequelize.NUMBER
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
    await queryInterface.dropTable('appointments');
  }
};