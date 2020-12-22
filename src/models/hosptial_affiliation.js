'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hosptial_affiliation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      hosptial_affiliation.hasMany(models.office, {
        foreignKey: "hospital_affiliation_id",
        as:"hospital_id"
      });
    }
  };
  hosptial_affiliation.init({
    doctor_id: DataTypes.INTEGER,
    hospital_name: DataTypes.STRING,
    city: DataTypes.STRING,
    countery: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'hosptial_affiliation',
  });
  return hosptial_affiliation;
};