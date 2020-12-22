'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class specialization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      specialization.belongsToMany(models.doctor, {
        through: "doctor_specialization",
        foreignKey: "specialization_id"
      });
    }
  };
  specialization.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'specialization',
  });
  return specialization;
};