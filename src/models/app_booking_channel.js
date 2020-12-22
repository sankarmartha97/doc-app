'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class app_booking_channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      app_booking_channel.hasMany(models.appointment, {
        foreignKey: "app_booking_channel_id",
        as: "appointment_booking_channel"
      })
    }
  };
  app_booking_channel.init({
    app_booking_channel_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'app_booking_channel',
  });
  return app_booking_channel;
};