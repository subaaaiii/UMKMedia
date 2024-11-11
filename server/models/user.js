"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Role, { foreignKey: { name: "id_role" } });
      User.hasOne(models.user_pribadi, { foreignKey: { name: "id_user" } });
      User.hasOne(models.kelas_rating, { foreignKey: { name: "id_user" } });
      User.hasMany(models.kelas_wishlist, { foreignKey: { name: "id_user" } });
    }
  }
  User.init(
    {
      nama_lengkap: DataTypes.STRING,
      username: DataTypes.STRING,
      no_hp: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      nama_depan: DataTypes.STRING,
      nama_belakang: DataTypes.STRING,
      biografi: DataTypes.STRING,
      uid_firebase: DataTypes.STRING,
      profile_picture: DataTypes.STRING,
      picture_link: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${process.env.BASE_URL}/images/user/${this.getDataValue(
            "profile_picture"
          )}`;
        },
      },
      uid_firebase: DataTypes.STRING,
      verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
