'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  appointment.init({
    user_account_id: DataTypes.INTEGER,
    office_id: DataTypes.INTEGER,
    probable_start_time: 'TIME',
    actual_end_time: 'TIME',
    appointment_status_id: DataTypes.INTEGER,
    appointment_taken_Date: DataTypes.DATE,
    app_booking_channel_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'appointment',
  });
  return appointment;
};