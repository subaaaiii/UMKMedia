'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lowongan_pekerjaans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_lowongan_pekerjaan: {
        type: Sequelize.STRING
      },
      batas_lamar: {
        type: Sequelize.DATE
      },
      deskripsi_lowongan_pekerjaan: {
        type: Sequelize.TEXT
      },
      persyaratan_lowongan_pekerjaan: {
        type: Sequelize.TEXT
      },
      id_departemen_pekerjaan: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "departemens",
          },
          key: "id",
        },
      },
      id_periode_pekerjaan: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "periode_pekerjaans",
          },
          key: "id",
        },
      },
      id_tipe_pekerjaan: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "tipe_pekerjaans",
          },
          key: "id",
        },
      },
      id_jenjang_pekerjaan: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "jenjang_pekerjaans",
          },
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lowongan_pekerjaans');
  }
};