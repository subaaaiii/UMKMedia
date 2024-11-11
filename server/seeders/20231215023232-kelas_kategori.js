"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_kategori", [
      {
        nama: "Enterpreneur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Sales & Marketing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Office Productivity",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_kategori", null, {});
  },
};
