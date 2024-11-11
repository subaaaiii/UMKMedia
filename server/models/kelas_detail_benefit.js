'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_detail_benefit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kelas_detail_benefit.init({
    id_kelas_detail: DataTypes.INTEGER,
    id_kelas_benefit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kelas_detail_benefit',
    tableName: 'kelas_detail_benefit',
  });
  return kelas_detail_benefit;
};