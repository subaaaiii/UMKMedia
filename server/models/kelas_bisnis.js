'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_bisnis extends Model {
    static associate(models) {
      kelas_bisnis.belongsTo(models.kelas_kategori, {foreignKey: {name: "id_kelas_kategori"}});
      kelas_bisnis.belongsTo(models.kelas_level, {foreignKey: {name: "id_kelas_level"}});
      kelas_bisnis.hasMany(models.kelas_rating, { foreignKey: 'id_kelas_bisnis'});
      kelas_bisnis.hasMany(models.kelas_regist, { foreignKey: {name: "id_kelas_bisnis"}});
      kelas_bisnis.hasOne(models.kelas_detail, { foreignKey: {name: "id_kelas_bisnis"}});
      kelas_bisnis.belongsToMany(models.kelas_diskon, { through: 'kelas_bisnis_diskon', foreignKey: 'id_kelas_bisnis'});
      kelas_bisnis.hasMany(models.kelas_wishlist, { foreignKey: {name: "id_kelas_bisnis" }})
    }
  }
  kelas_bisnis.init({
    nama: DataTypes.STRING,
    image: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    images_link: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${process.env.BASE_URL}/images/kelas/${this.getDataValue(
          "image"
        )}`;
      },
    },
  }, {
    sequelize,
    modelName: 'kelas_bisnis',
    tableName: 'kelas_bisnis',
  });
  return kelas_bisnis;
};