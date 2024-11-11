"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_benefit", [
      {
        benefit: "Akses Kelas Selamanya",
        image: "clock.png",
        deskripsi:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo eu purus vulputate vestibulum. Curabitur eu justo et velit rhoncus feugiat.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        benefit: "Belajar Dari Manapun",
        image: "anywhere.png",
        deskripsi:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo eu purus vulputate vestibulum. Curabitur eu justo et velit rhoncus feugiat.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        benefit: "Konsultasi Dengan Mentor",
        image: "conversation.png",
        deskripsi:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo eu purus vulputate vestibulum. Curabitur eu justo et velit rhoncus feugiat.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        benefit: "Sertifikat",
        image: "badge.png",
        deskripsi:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo eu purus vulputate vestibulum. Curabitur eu justo et velit rhoncus feugiat.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_benefit", null, {});
  },
};
