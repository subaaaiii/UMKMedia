'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Kategoris", [
      {
        nama_kategori: "Semua",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_kategori: "Berita",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_kategori: "Event",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_kategori: "Wawasan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_kategori: "Tips",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_kategori: "Komunitas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Kategoris", null, {});

  }
};
