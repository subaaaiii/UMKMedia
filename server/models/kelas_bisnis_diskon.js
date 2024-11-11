'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_bisnis_diskon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kelas_bisnis_diskon.init({
    id_kelas_bisnis: DataTypes.INTEGER,
    id_kelas_diskon: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kelas_bisnis_diskon',
    tableName: 'kelas_bisnis_diskon',
  });
  return kelas_bisnis_diskon;
};