'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'superadmin1',
        password: '$2b$10$1RzbgiO.PnHwRU87cGGnxO1NzpOHfVDK7pNdXEJ2AdQyXbK4efvOW',
        id_role: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
