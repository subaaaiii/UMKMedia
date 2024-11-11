"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_harga", [
      {
        harga_max: 0,
        harga_min: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        harga_max: 100000,
        harga_min: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        harga_max: 250000,
        harga_min: 100000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        harga_max: 500000,
        harga_min: 251000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        harga_max: 1000000,
        harga_min: 501000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_harga", null, {});
  },
};
