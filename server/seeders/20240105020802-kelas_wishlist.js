'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_wishlists", [
      {
        id_user: 3,
        id_kelas_bisnis: 1,
        date_wishlist: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_user: 3,
        id_kelas_bisnis: 2,
        date_wishlist: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_user: 3,
        id_kelas_bisnis: 6,
        date_wishlist: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_user: 4,
        id_kelas_bisnis: 6,
        date_wishlist: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_user: 4,
        id_kelas_bisnis: 5,
        date_wishlist: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_wishlists", null, {});
  }
};
