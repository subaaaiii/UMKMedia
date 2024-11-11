"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Roles", [
      {
        nama_role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_role: "admin_super",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Roles", null, {});
  },
};
