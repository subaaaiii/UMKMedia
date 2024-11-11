'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_kuis", [
      {
        nama: "Modul 1", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 1, urutan: 1,
      },
      {
        nama: "Modul 2", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 1, urutan: 2,
      },
      {
        nama: "Modul 3", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 1, urutan: 3,
      },
      {
        nama: "Modul 4", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 1, urutan: 4,
      },
      //
      {
        nama: "Modul 1", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 2, urutan: 1,
      },
      {
        nama: "Modul 2", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 2, urutan: 2,
      },
      {
        nama: "Modul 3", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 2, urutan: 3,
      },
      {
        nama: "Modul 4", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 2, urutan: 4,
      },
      //
      {
        nama: "Modul 1", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 3, urutan: 1,
      },
      {
        nama: "Modul 2", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 3, urutan: 2,
      },
      {
        nama: "Modul 3", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 3, urutan: 3,
      },
      {
        nama: "Modul 4", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 3, urutan: 4,
      },
      //
      {
        nama: "Modul 1", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 4, urutan: 1,
      },
      {
        nama: "Modul 2", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 4, urutan: 2,
      },
      {
        nama: "Modul 3", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 4, urutan: 3,
      },
      {
        nama: "Modul 4", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 4, urutan: 4,
      },
      //
      {
        nama: "Modul 1", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 5, urutan: 1,
      },
      {
        nama: "Modul 2", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 5, urutan: 2,
      },
      {
        nama: "Modul 3", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 5, urutan: 3,
      },
      {
        nama: "Modul 4", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 5, urutan: 4,
      },
      //
      {
        nama: "Modul 1", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 6, urutan: 1,
      },
      {
        nama: "Modul 2", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 6, urutan: 2,
      },
      {
        nama: "Modul 3", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 6, urutan: 3,
      },
      {
        nama: "Modul 4", createdAt: new Date(), updatedAt: new Date(),id_kelas_detail: 6, urutan: 4,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_kuis", null, {});
  }
};
