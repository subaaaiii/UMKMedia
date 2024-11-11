'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("jenjang_pekerjaans", [
      {
        nama_jenjang__pekerjaan: "Lulusan Baru",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("jenjang_pekerjaans", null, {});

  }
};
