"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_regist", [
      {tgl_daftar: new Date("2023-12-15"), progress:2, id_user: 3,id_kelas_bisnis: 1,createdAt: new Date(),updatedAt: new Date()},
      {tgl_daftar: new Date("2023-12-15"), progress:1, id_user: 3,id_kelas_bisnis: 2,createdAt: new Date(),updatedAt: new Date()},
      {tgl_daftar: new Date("2023-12-15"), progress:2, id_user: 3,id_kelas_bisnis: 3,createdAt: new Date(),updatedAt: new Date()},
      {tgl_daftar: new Date("2023-12-15"), progress:0, id_user: 3,id_kelas_bisnis: 4,createdAt: new Date(),updatedAt: new Date()},
      {tgl_daftar: new Date("2023-12-15"), progress:2, id_user: 4,id_kelas_bisnis: 1,createdAt: new Date(),updatedAt: new Date()},
      {tgl_daftar: new Date("2023-12-15"), progress:0, id_user: 4,id_kelas_bisnis: 2,createdAt: new Date(),updatedAt: new Date()},
      {tgl_daftar: new Date("2023-12-15"), progress:3, id_user: 4,id_kelas_bisnis: 3,createdAt: new Date(),updatedAt: new Date()},
      {tgl_daftar: new Date("2023-12-15"), progress:2, id_user: 4,id_kelas_bisnis: 4,createdAt: new Date(),updatedAt: new Date()},
      {tgl_daftar: new Date("2023-12-15"), progress:0, id_user: 5,id_kelas_bisnis: 1,createdAt: new Date(),updatedAt: new Date()},
      {tgl_daftar: new Date("2023-12-15"), progress:1, id_user: 5,id_kelas_bisnis: 2,createdAt: new Date(),updatedAt: new Date()},
      {tgl_daftar: new Date("2023-12-15"), progress:2, id_user: 6,id_kelas_bisnis: 3,createdAt: new Date(),updatedAt: new Date()},
      {tgl_daftar: new Date("2023-12-15"), progress:1, id_user: 6,id_kelas_bisnis: 4,createdAt: new Date(),updatedAt: new Date()},
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_regist", null, {});
  },
};
