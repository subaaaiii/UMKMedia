"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cms_auth extends Model {
    static associate(models) {
      // cms_auth.belongsTo(models.Role, { foreignKey: { name: "id_role" } });
    }
  }
  cms_auth.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      roleId: DataTypes.STRING,
      access: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "cms_auth",
      tableName: "cms_auths",
    }
  );
  return cms_auth;
};
