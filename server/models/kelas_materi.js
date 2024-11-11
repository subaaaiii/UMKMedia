"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kelas_materi extends Model {
    static associate(models) {
      kelas_materi.belongsTo(models.kelas_detail, {foreignKey: "id_kelas_detail"});
      kelas_materi.hasMany(models.sub_materi_kelas, {foreignKey: {name: "id_materi"}});
    }
  }
  kelas_materi.init(
    {
      materi: DataTypes.STRING,
      link: DataTypes.STRING,
      urutan: DataTypes.INTEGER,
      deskripsi: {
        type: DataTypes.STRING(1000),
        allowNull: true,
      },
      title: {
        type: DataTypes.VIRTUAL,
        get() {
          return `Modul ${this.getDataValue("urutan")} : ${this.getDataValue("materi")}`;
        },
      },
    },
    {
      sequelize,
      modelName: "kelas_materi",
      tableName: "kelas_materi",
    }
  );
  return kelas_materi;
};
