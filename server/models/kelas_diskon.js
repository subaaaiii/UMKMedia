'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_diskon extends Model {
    static associate(models) {
      kelas_diskon.belongsToMany(models.kelas_bisnis, { through: 'kelas_bisnis_diskon', foreignKey: 'id_kelas_diskon'});
    }
  }
  kelas_diskon.init({
    nama: DataTypes.STRING,
    jumlah_persen: DataTypes.INTEGER,
    tgl_mulai: DataTypes.DATE,
    tgl_selesai: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'kelas_diskon',
    tableName: 'kelas_diskon',
  });
  return kelas_diskon;
};