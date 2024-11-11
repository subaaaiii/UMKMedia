"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_level", [
      {
        nama: "Pemula",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Menengah",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Lanjutan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_level", null, {});
  },
};
