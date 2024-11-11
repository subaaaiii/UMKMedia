'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_detail_materi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kelas_detail_materi.init({
    id_kelas_detail: {
      type : DataTypes.INTEGER,
      primaryKey:false,
      unique: false
    },
    id_kelas_materi: {
      type : DataTypes.INTEGER,
      primaryKey:false,
      unique: false
    },
  }, {
    sequelize,
    modelName: 'kelas_detail_materi',
    tableName: 'kelas_detail_materi',
  });
  return kelas_detail_materi;
};