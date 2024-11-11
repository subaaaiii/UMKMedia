'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("departemens", [
      {
        nama_departemen_pekerjaan: "Technology",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_departemen_pekerjaan: "Sales & Marketing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_departemen_pekerjaan: "Finance,Accounting, and Tax",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_departemen_pekerjaan: "Business Development",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("departemens", null, {});

  }
};
