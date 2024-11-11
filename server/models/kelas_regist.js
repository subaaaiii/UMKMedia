'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_regist extends Model {
    static associate(models) {
      kelas_regist.belongsTo(models.User, {foreignKey: {name: "id_user"}});
      kelas_regist.belongsTo(models.kelas_bisnis, { foreignKey: {name: "id_kelas_bisnis"}});
    }
  }
  kelas_regist.init({
    tgl_daftar: DataTypes.DATE,
    progress: {type : DataTypes.INTEGER, defaultValue: 0},
  }, {
    sequelize,
    modelName: 'kelas_regist',
    tableName: 'kelas_regist',
  });
  return kelas_regist;
};