'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kelas_level.init({
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kelas_level',
    tableName: 'kelas_level',
  });
  return kelas_level;
};