'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipe_pekerjaan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tipe_pekerjaan.init({
    nama_tipe__perkerjaan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipe_pekerjaan',
    tableName: 'tipe_pekerjaans',
  });
  return tipe_pekerjaan;
};