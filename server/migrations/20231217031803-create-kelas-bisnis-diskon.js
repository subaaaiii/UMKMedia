'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kelas_bisnis_diskons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_kelas_bisnis: {
        type: Sequelize.INTEGER,
        references: {
          model: 'kelas_bisnis',
          key: 'id'
        },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },
      id_kelas_diskon: {
        type: Sequelize.INTEGER,
        references: {
          model: 'kelas_diskon',
          key: 'id'
        },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
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
    await queryInterface.dropTable('kelas_bisnis_diskons');
  }
};