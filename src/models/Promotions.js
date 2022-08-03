'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promotions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Promotions.init(
    {
      TitleVn: DataTypes.STRING,
      SubTitleVn: DataTypes.TEXT('long'),
      EditorContentVn: DataTypes.TEXT('long'),
      HtmlContentVn: DataTypes.TEXT('long'),

      TitleEn: DataTypes.STRING,
      SubTitleEn: DataTypes.TEXT('long'),
      EditorContentEn: DataTypes.TEXT('long'),
      HtmlContentEn: DataTypes.TEXT('long'),

      Thumbnail: DataTypes.TEXT('long'),
      isPopUp: DataTypes.BOOLEAN,
      isDeleted: DataTypes.BOOLEAN,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Promotions',
    }
  );
  return Promotions;
};
