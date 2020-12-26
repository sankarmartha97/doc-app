'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      doctor.belongsToMany(models.specialization, {
        through: "doctor_specialization",
        foreignKey: "doctor_id"
      });

      doctor.hasMany(models.qualification, {
        foreignKey: "doctor_id",
        as:"docsQulification"
      });

      doctor.hasMany(models.hosptial_affiliation, {
        foreignKey: "doctor_id",
        as:"doctor_hosptial_affiliation"
      });

      doctor.hasMany(models.office, {
        foreignKey: "doctor_id",
        as:"doctor_office"
      });

      doctor.hasMany(models.client_review, {
        foreignKey: "doctor_id",
        as:"doctor_client_review"
      });
    }
  };
  doctor.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile_number: DataTypes.STRING,
    gender: DataTypes.STRING,
    speaking_langages: DataTypes.STRING,
    professional_statement: DataTypes.STRING,
    practicing_from: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'doctor',
  });
  return doctor;
};