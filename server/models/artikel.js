"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Artikel extends Model {
    static associate(models) {
      Artikel.belongsTo(models.Kategori, {
        foreignKey: {
          name: "id_kategori",
        },
      });
    }
  }
  Artikel.init(
    {
      judul: DataTypes.STRING,
      penerbit: DataTypes.STRING,
      deskripsi: {
        type: DataTypes.STRING(1000),
        allowNull: true,
      },
      images: DataTypes.STRING,
      tanggal: DataTypes.STRING,
      link: DataTypes.STRING,
      images_link: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${process.env.BASE_URL}/artikel/${this.getDataValue(
            "images"
          )}`;
        },
      },
    },
    {
      sequelize,
      modelName: "Artikel",
      tableName: "Artikels",
    }
  );
  return Artikel;
};
