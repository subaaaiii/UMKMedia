'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_mentor extends Model {
    static associate(models) {
      kelas_mentor.belongsToMany(models.kelas_detail, { through: 'kelas_detail_mentor', foreignKey: 'id_kelas_mentor'});
    }
  }
  kelas_mentor.init({
    nama: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    perusahaan: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    image: DataTypes.STRING,
    images_link: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${process.env.BASE_URL}/images/mentor/${this.getDataValue(
          "image"
        )}`;
      },
    },
  }, {
    sequelize,
    modelName: 'kelas_mentor',
    tableName: 'kelas_mentor',
  });
  return kelas_mentor;
};