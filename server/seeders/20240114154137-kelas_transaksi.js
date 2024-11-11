"use strict";

/** @type {import('sequelize-cli').Migration} */
const {
  sequelize,
  kelas_bisnis,
  kelas_bisnis_diskon,
  kelas_diskon,
} = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 7);
    const expiredDate = new Date(currentDate);
    expiredDate.setHours(expiredDate.getHours() + 24);

    const kelasBisnis = await kelas_bisnis.findByPk(1);
    const kelasBisnisDiskon = await kelas_bisnis_diskon.findOne({
      where: { id_kelas_bisnis: kelasBisnis.id },
    });

    const kelasDiskon = kelasBisnisDiskon
      ? await kelas_diskon.findByPk(kelasBisnisDiskon.id_kelas_diskon)
      : null;

    const harga = kelasBisnis.harga;
    const persenDiskon = kelasDiskon ? kelasDiskon.jumlah_persen : 0;
    const total = kelasBisnis.harga * ((100 - kelasDiskon.jumlah_persen) / 100);

    return queryInterface.bulkInsert("kelas_transaksis", [
      {
        id_user: 4,
        id_kelas_bisnis: 1,
        harga: harga,
        persen_diskon: persenDiskon,
        total: total,
        status_transaksi: "canceled",
        date_transaksi: currentDate,
        date_expired: expiredDate,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        id_user: 4,
        id_kelas_bisnis: 2,
        harga: harga,
        persen_diskon: persenDiskon,
        total: total,
        status_transaksi: "success",
        date_transaksi: currentDate,
        date_expired: expiredDate,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        id_user: 4,
        id_kelas_bisnis: 3,
        harga: harga,
        persen_diskon: persenDiskon,
        total: total,
        status_transaksi: "pending",
        date_transaksi: currentDate,
        date_expired: expiredDate,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_transaksis", null, {});
  },
};
