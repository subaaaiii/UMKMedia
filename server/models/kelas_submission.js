'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_submission extends Model {
    
     
    static associate(models) {
      kelas_submission.belongsTo(models.kelas_detail, {foreignKey: "id_kelas_detail"});
      kelas_submission.belongsTo(models.User, {foreignKey: "id_user"});
    }
  }
  kelas_submission.init({
    link: DataTypes.STRING,
    is_accepted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'kelas_submission',
    tableName: 'kelas_submission',
  });
  return kelas_submission;
};