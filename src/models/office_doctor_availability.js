'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class office_doctor_availability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  office_doctor_availability.init({
    office_id: DataTypes.INTEGER,
    day_of_week: DataTypes.STRING,
    start_time: {
      type:'TIME'
    },
    end_time: 'TIME',
    is_available: DataTypes.BOOLEAN,
    reason_of_unavailability: DataTypes.STRING,
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
    modelName: 'office_doctor_availability',
  });
  return office_doctor_availability;
};