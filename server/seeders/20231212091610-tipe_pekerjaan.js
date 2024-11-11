'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("tipe_pekerjaans", [
      {
        nama_tipe__perkerjaan: "Work From Anywhere",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_tipe__perkerjaan: "On-Site",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("tipe_pekerjaans", null, {});

  }
};
