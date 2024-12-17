'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_tugas extends Model {
    static associate(models) {
      kelas_tugas.belongsTo(models.kelas_detail, {foreignKey: "id_kelas_detail"});
    }
  }
  kelas_tugas.init({
    judul: DataTypes.STRING,
    deskripsi : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kelas_tugas',
    tableName: 'kelas_tugas',
  });
  return kelas_tugas;
};