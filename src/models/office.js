'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class office extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      office.hasMany(models.office_doctor_availability, {
        foreignKey: "office_id",
        as:"office_id"
      });
      office.hasMany(models.in_network_insurance, {
        foreignKey: "office_id",
        as:"office_network_insurance"
      });
      office.hasMany(models.appointment, {
        foreignKey: "office_id",
        as: "user_appointment"
      })
    }
  };
  office.init({
    doctor_id: DataTypes.INTEGER,
    hospital_affiliation_id: DataTypes.INTEGER,
    time_slot_per_client_in_min: DataTypes.INTEGER,
    first_consultation_fee: DataTypes.INTEGER,
    followup_consultation_fee: DataTypes.INTEGER,
    street_address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zip: DataTypes.STRING,
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
    modelName: 'office',
  });
  return office;
};