'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerReviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CustomerReviews.belongsTo(models.Hotels, {
        foreignKey: 'HotelId',
        targetKey: 'id',
        as: 'HotelCustomerReviewsData',
      });
    }
  }
  CustomerReviews.init(
    {
      HotelId: DataTypes.INTEGER,
      NameVn: DataTypes.STRING,
      NameEn: DataTypes.STRING,
      NameCn: DataTypes.STRING,
      CommentVn: DataTypes.TEXT('long'),
      CommentEn: DataTypes.TEXT('long'),
      CommentCn: DataTypes.TEXT('long'),
      RatingNumber: DataTypes.INTEGER,
      ThumbnailImageOnlineLink: DataTypes.TEXT('long'),
      ReviewFrom: DataTypes.STRING,
      isDeleted: DataTypes.BOOLEAN,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'CustomerReviews',
    }
  );
  return CustomerReviews;
};
