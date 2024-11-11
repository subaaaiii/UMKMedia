"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_mentor", [
      {
        nama: "Elon Musk",
        jabatan: "CEO",
        perusahaan: "Tesla Motors",
        deskripsi:
          "lorep ipsum jawkdaw akwjdnkajw d awkjdnkawjndkaw aldknalkwmdlakw aslkdmalkwdlkawd",
        image: "elon-musk.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Mark Zuckerberg",
        jabatan: "CEO",
        perusahaan: "Facebook",
        deskripsi:
          "lorep ipsum jawkdaw akwjdnkajw d awkjdnkawjndkaw aldknalkwmdlakw aslkdmalkwdlkawd",
        image: "mark-zuckerberg.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Bill Gates",
        jabatan: "Former CEO",
        perusahaan: "Microsoft",
        deskripsi:
          "lorep ipsum jawkdaw akwjdnkajw d awkjdnkawjndkaw aldknalkwmdlakw aslkdmalkwdlkawd",
        image: "bill-gates.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_mentor", null, {});
  },
};
