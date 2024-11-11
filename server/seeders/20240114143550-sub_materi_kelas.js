'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("sub_materi_kelas", [
      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 1,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 1,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 2,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 2,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 3,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 3,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 4,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 4,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 5,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 5,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 6,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 6,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 7,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 7,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 8,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 8,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 9,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 9,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 10,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 10,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 11,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 11,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 12,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 12,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 13,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 13,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 14,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 14,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 15,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 15,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 16,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 16,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 17,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 17,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 18,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 18,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 19,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 19,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 20,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 20,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 21,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 21,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 22,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 22,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 23,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 23,createdAt: new Date(),updatedAt: new Date()},

      {nama: "Sub Materi 1", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 24,createdAt: new Date(),updatedAt: new Date()},
      {nama: "Sub Materi 2", link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY", id_materi: 24,createdAt: new Date(),updatedAt: new Date()},
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("sub_materi_kelas", null, {});
  }
};
