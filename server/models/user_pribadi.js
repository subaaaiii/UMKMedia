'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_pribadi extends Model {
    static associate(models) {
      user_pribadi.belongsTo(models.User, { foreignKey: { name: "id_user" } });
    }
  }
  user_pribadi.init({
    no_wa: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    alamat: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    kota_kabupaten: DataTypes.STRING,
    kode_pos: DataTypes.STRING,
    link_ig: DataTypes.STRING,
    link_fb: DataTypes.STRING,
    link_linkedid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_pribadi',
    tableName: 'user_pribadi',
  });
  return user_pribadi;
};