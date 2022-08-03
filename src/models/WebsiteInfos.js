'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WebsiteInfos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  WebsiteInfos.init(
    {
      NNTDetailRawVn: DataTypes.TEXT('long'),
      NNTDetailHTMLVn: DataTypes.TEXT('long'),
      NNTDetailRawEn: DataTypes.TEXT('long'),
      NNTDetailHTMLEn: DataTypes.TEXT('long'),
      WebsiteImage: DataTypes.TEXT('long'),
      MarketingPhone: DataTypes.STRING,
      MarketingEmail: DataTypes.STRING,
      FacebookLink: DataTypes.TEXT('long'),
      ZaloLink: DataTypes.TEXT('long'),
      InstagramLink: DataTypes.TEXT('long'),
      isActive: DataTypes.BOOLEAN,
      isDeleted: DataTypes.BOOLEAN,

      //new
      HotelRulesEditorContentVn: DataTypes.TEXT('long'),
      HotelRulesHtmlContentVn: DataTypes.TEXT('long'),
      HotelRulesEditorContentEn: DataTypes.TEXT('long'),
      HotelRulesHtmlContentEn: DataTypes.TEXT('long'),
    },
    {
      sequelize,
      modelName: 'WebsiteInfos',
    }
  );
  return WebsiteInfos;
};
