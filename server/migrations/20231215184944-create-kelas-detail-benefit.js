'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kelas_detail_benefit', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_kelas_detail: {
        type: Sequelize.INTEGER,
        references: {
          model: 'kelas_detail',
          key: 'id'
        },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },
      id_kelas_benefit: {
        type: Sequelize.INTEGER,
        references: {
          model: 'kelas_benefit',
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
    await queryInterface.dropTable('kelas_detail_benefit');
  }
};