'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jenjang_pekerjaan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jenjang_pekerjaan.init({
    nama_jenjang__pekerjaan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'jenjang_pekerjaan',
    tableName: 'jenjang_pekerjaans',
  });
  return jenjang_pekerjaan;
};