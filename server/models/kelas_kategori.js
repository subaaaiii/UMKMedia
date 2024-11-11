'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_kategori extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //kelas_kategori.hasMany(models.kelas_wishlist, { foreignKey: {name: "id_kelas_kategori" }})
    }
  }
  kelas_kategori.init({
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kelas_kategori',
    tableName: 'kelas_kategori',
  });
  return kelas_kategori;
};