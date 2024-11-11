"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_rating", [
      {
        nilai: 5,
        komentar: "bagus sekali",
        id_user: 3,
        id_kelas_bisnis: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nilai: 4,
        komentar: "lumayan",
        id_user: 4,
        id_kelas_bisnis: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nilai: 2,
        komentar: "Kurang Bermanfaat",
        id_user: 3,
        id_kelas_bisnis: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nilai: 1,
        komentar: "Jelek",
        id_user: 4,
        id_kelas_bisnis: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nilai: 3,
        komentar: "Biasa saja",
        id_user: 3,
        id_kelas_bisnis: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nilai: 3,
        komentar: "Di Tingkatkan Lagi",
        id_user: 4,
        id_kelas_bisnis: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nilai: 5,
        komentar: "Bagus Sekali",
        id_user: 3,
        id_kelas_bisnis: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nilai: 5,
        komentar: "Sangat Bermanfaat",
        id_user: 4,
        id_kelas_bisnis: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_rating", null, {});
  },
};
