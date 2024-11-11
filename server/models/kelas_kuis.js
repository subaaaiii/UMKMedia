'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_kuis extends Model {
    static associate(models) {
      kelas_kuis.belongsTo(models.kelas_detail, {foreignKey: "id_kelas_detail"});
    }
  }
  kelas_kuis.init({
    nama: DataTypes.STRING,
    urutan: DataTypes.INTEGER,
    title: {
      type: DataTypes.VIRTUAL,
      get() {
        return `Kuis ${this.getDataValue("urutan")} | ${this.getDataValue("nama")}`;
      },
    },
  }, {
    sequelize,
    modelName: 'kelas_kuis',
    tableName: 'kelas_kuis',
  });
  return kelas_kuis;
};