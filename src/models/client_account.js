'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class client_account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      client_account.hasMany(models.client_review, {
        foreignKey: "user_account_id",
        as: "user_account"
      });

      client_account.hasMany(models.appointment, {
        foreignKey: "user_account_id",
        as: "user_appointment"
      })
    }
  };
  client_account.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    email: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      defaultValue: sequelize.fn('now'),
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      defaultValue: sequelize.fn('now'),
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'client_account',
  });
  return client_account;
};