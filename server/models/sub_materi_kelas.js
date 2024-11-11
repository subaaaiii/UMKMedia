'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sub_materi_kelas extends Model {
    static associate(models) {
      sub_materi_kelas.belongsTo(models.kelas_materi, {foreignKey: "id_materi"});
    }
  }
  sub_materi_kelas.init({
    nama: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sub_materi_kelas',
    tableName: 'sub_materi_kelas',
  });
  return sub_materi_kelas;
};