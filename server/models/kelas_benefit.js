'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_benefit extends Model {
    static associate(models) {
      kelas_benefit.belongsToMany(models.kelas_detail, { through: 'kelas_detail_benefit', foreignKey: 'id_kelas_benefit'});
    }
  }
  kelas_benefit.init({
    benefit: DataTypes.STRING,
    image: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    images_link: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${process.env.BASE_URL}/images/benefit/${this.getDataValue(
          "image"
        )}`;
      },
    }
  }, {
    sequelize,
    modelName: 'kelas_benefit',
    tableName: 'kelas_benefit',
  });
  return kelas_benefit;
};