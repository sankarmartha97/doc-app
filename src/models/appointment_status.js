'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class appointment_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      appointment_status.hasMany(models.appointment, {
        foreignKey: "appointment_status_id",
        as: "appointment_status"
      })
    }
  };
  appointment_status.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'appointment_status',
  });
  return appointment_status;
};