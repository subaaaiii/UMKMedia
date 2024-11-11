'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("user_pribadi", [
      {
        no_wa: '0888812312',
        jenis_kelamin: 'Perempuan',
        tempat_lahir: 'Blitar',
        tanggal_lahir: new Date(),
        alamat: "kauman - srengat - blitar",
        provinsi: "Jawa Timur",
        kota_kabupaten: "Blitar",
        kode_pos: '66152',
        link_ig: "https://www.linkedin.com/",
        link_fb: "https://www.linkedin.com/",
        link_linkedid: 'https://www.linkedin.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
        id_user: 3,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("user_pribadi", null, {});
  }
};
