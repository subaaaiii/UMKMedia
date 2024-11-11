"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "lowongan_pekerjaans",
      "link_form_pendaftaran",
      {
        type: Sequelize.STRING,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      "lowongan_pekerjaans",
      "link_form_pendaftaran"
    );
  },
};
