'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      mobile_number: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      speaking_langages: {
        type: Sequelize.STRING
      },
      professional_statement: {
        type: Sequelize.STRING
      },
      practicing_from: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('doctors');
  }
};