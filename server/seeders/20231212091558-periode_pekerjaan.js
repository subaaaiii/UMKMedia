'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("periode_pekerjaans", [
      {
        nama_periode_perkerjaan: "Full-time",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_periode_perkerjaan: "Part-time",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_periode_perkerjaan: "Internship",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_periode_perkerjaan: "Freelance",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("periode_pekerjaans", null, {});

  }
};
