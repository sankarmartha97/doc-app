'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('client_reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_account_id: {
        type: Sequelize.INTEGER
      },
      doctor_id: {
        type: Sequelize.INTEGER
      },
      is_review_anonymous: {
        type: Sequelize.BOOLEAN
      },
      wait_time_rating: {
        type: Sequelize.INTEGER
      },
      bedside_manner_rating: {
        type: Sequelize.INTEGER
      },
      overall_rating: {
        type: Sequelize.INTEGER
      },
      review: {
        type: Sequelize.STRING
      },
      is_doctor_recommended: {
        type: Sequelize.STRING
      },
      review_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('client_reviews');
  }
};