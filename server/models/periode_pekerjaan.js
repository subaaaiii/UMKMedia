'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class periode_pekerjaan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  periode_pekerjaan.init({
    nama_periode_perkerjaan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'periode_pekerjaan',
    tableName: 'periode_pekerjaans',
  });
  return periode_pekerjaan;
};