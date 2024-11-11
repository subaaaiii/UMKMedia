"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_bisnis", [
      {
        nama: "langkah sukses jadi young interpreneur",
        image: "bootcamp1.jpg",
        harga: 0,
        id_kelas_kategori: 3,
        id_kelas_level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Setup Marketplace : Membangun Brand Bisnis",
        image: "bootcamp2.jpg",
        harga: 350000,
        id_kelas_kategori: 3,
        id_kelas_level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Belajar Copywriting : Tingkatkan Penjualan",
        image: "bootcamp3.jpg",
        harga: 500000,
        id_kelas_kategori: 3,
        id_kelas_level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Mengelola Karyawan Demi Kualitas Bisnis",
        image: "bootcamp4.jpg",
        harga: 250000,
        id_kelas_kategori: 1,
        id_kelas_level: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Berkomunikasi Ala Pembisnis Raksasa",
        image: "bootcamp5.jpg",
        harga: 400000,
        id_kelas_kategori: 2,
        id_kelas_level: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Membangun Relasi Baik Dengan Client",
        image: "bootcamp6.jpg",
        harga: 600000,
        id_kelas_kategori: 2,
        id_kelas_level: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_bisnis", null, {});
  },
};
