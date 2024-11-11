'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class departemen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  departemen.init({
    nama_departemen_pekerjaan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'departemen',
    tableName: 'departemens',
  });
  return departemen;
};