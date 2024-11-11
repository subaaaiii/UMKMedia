'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_detail_mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kelas_detail_mentor.init({
    id_kelas_detail: DataTypes.INTEGER,
    id_kelas_mentor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kelas_detail_mentor',
    tableName: 'kelas_detail_mentor',
  });
  return kelas_detail_mentor;
};