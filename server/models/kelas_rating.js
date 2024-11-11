'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_rating extends Model {
    static associate(models) {
      kelas_rating.belongsTo(models.User, {foreignKey:"id_user"});
      kelas_rating.belongsTo(models.kelas_bisnis, { foreignKey: 'id_kelas_bisnis'});
      kelas_rating.belongsTo(models.kelas_detail, { foreignKey: 'id_kelas_bisnis', targetKey: 'id_kelas_bisnis'});
    }
  }
  kelas_rating.init({
    nilai: DataTypes.INTEGER,
    komentar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kelas_rating',
    tableName: 'kelas_rating',
  });
  return kelas_rating;
};