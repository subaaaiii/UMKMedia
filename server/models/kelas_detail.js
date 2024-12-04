"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kelas_detail extends Model {
    static associate(models) {
      kelas_detail.belongsTo(models.kelas_bisnis, {
        foreignKey: { name: "id_kelas_bisnis" },
      });
      kelas_detail.belongsToMany(models.kelas_benefit, {
        through: "kelas_detail_benefit",
        foreignKey: "id_kelas_detail",
      });
      kelas_detail.belongsToMany(models.kelas_mentor, {
        through: "kelas_detail_mentor",
        foreignKey: "id_kelas_detail",
      });
      kelas_detail.hasMany(models.kelas_rating, {
        foreignKey: "id_kelas_bisnis",
        targetKey: "id_kelas_bisnis",
      });
      kelas_detail.hasMany(models.kelas_materi, {foreignKey: {name: "id_kelas_detail"}});
      kelas_detail.hasMany(models.kelas_kuis, {foreignKey: {name: "id_kelas_detail"}});

    }
  }
  kelas_detail.init(
    {
      deskripsi: {
        type: DataTypes.STRING(10000),
        allowNull: true,
      },
      tugas: {
        type: DataTypes.STRING(10000),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "kelas_detail",
      tableName: "kelas_detail",
    }
  );
  return kelas_detail;
};
