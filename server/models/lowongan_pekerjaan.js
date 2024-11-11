'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lowongan_pekerjaan extends Model {
    static associate(models) {
      lowongan_pekerjaan.belongsTo(models.departemen, {
        foreignKey: {
          name: "id_departemen_pekerjaan",
        }
      });
      lowongan_pekerjaan.belongsTo(models.periode_pekerjaan, {
        foreignKey: {
          name: "id_periode_pekerjaan",
        }
      });
      lowongan_pekerjaan.belongsTo(models.tipe_pekerjaan, {
        foreignKey: {
          name: "id_tipe_pekerjaan",
        }
      });
      lowongan_pekerjaan.belongsTo(models.jenjang_pekerjaan, {
        foreignKey: {
          name: "id_jenjang_pekerjaan",
        }
      });
    }
  }
  lowongan_pekerjaan.init({
    nama_lowongan_pekerjaan: DataTypes.STRING,
    batas_lamar: DataTypes.DATE,
    deskripsi_lowongan_pekerjaan: DataTypes.TEXT,
    persyaratan_lowongan_pekerjaan: DataTypes.TEXT,
    id_departemen_pekerjaan: DataTypes.INTEGER,
    id_periode_pekerjaan: DataTypes.INTEGER,
    id_tipe_pekerjaan: DataTypes.INTEGER,
    id_jenjang_pekerjaan: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'lowongan_pekerjaan',
    tableName: 'lowongan_pekerjaans',
  });
  return lowongan_pekerjaan;
};