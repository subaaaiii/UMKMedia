"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.hasOne(models.User, {foreignKey: {name: "id_role"},
      });
      // Role.hasMany(models.cms_auth, {foreignKey: {name: "id_role"},
      // });
    }
  }
  Role.init(
    {
      nama_role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Role",
      tableName: "Roles",
    }
  );
  return Role;
};
