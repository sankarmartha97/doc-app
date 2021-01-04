'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class qualification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  qualification.init({
    name: DataTypes.STRING,
    doctor_id: DataTypes.INTEGER,
    institute_name: DataTypes.STRING,
    procurement_year: DataTypes.DATE,
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
    modelName: 'qualification',
  });
  return qualification;
};