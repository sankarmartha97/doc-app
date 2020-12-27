'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class client_review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  client_review.init({
    user_account_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    is_review_anonymous: DataTypes.BOOLEAN,
    wait_time_rating: DataTypes.INTEGER,
    bedside_manner_rating: DataTypes.INTEGER,
    overall_rating: DataTypes.INTEGER,
    review: DataTypes.STRING(500),
    is_doctor_recommended: DataTypes.STRING,
    review_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'client_review',
  });
  return client_review;
};