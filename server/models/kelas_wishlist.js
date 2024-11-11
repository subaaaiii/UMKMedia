'use strict';
const {
  Model, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_wishlist extends Model {
    static associate(models) {
      kelas_wishlist.belongsTo(models.User,{
        foreignKey: {
          name: "id_user"
        }
      }),
      kelas_wishlist.belongsTo(models.kelas_bisnis,{
        foreignKey: {
          name: "id_kelas_bisnis",
        }
      })
    }
  }
  kelas_wishlist.init(
    {
      date_wishlist: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      isRemove: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'kelas_wishlist',
      tableName: 'kelas_wishlists',
    }
  );
  return kelas_wishlist;
};