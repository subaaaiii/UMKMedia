'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_harga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kelas_harga.init({
    harga_max: DataTypes.INTEGER,
    harga_min: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kelas_harga',
    tableName: 'kelas_harga',
  });
  return kelas_harga;
};