"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        nama_lengkap: null,
        username: "admin",
        no_hp: null,
        email: "admin@gmail.com",
        password:
          "$2a$12$I8MWoQ7NQne7ae.ClwF6XOmfl8Z6Vd/k3zHeLJSADedaSzy1fbGj2",
        nama_depan: null,
        nama_belakang: null,
        biografi: null,
        uid_firebase: null,
        profile_picture: null,
        id_role: 1,
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_lengkap: null,
        username: "super admin",
        no_hp: null,
        email: "superadmin@gmail.com",
        password:
          "$2a$12$I8MWoQ7NQne7ae.ClwF6XOmfl8Z6Vd/k3zHeLJSADedaSzy1fbGj2",
        nama_depan: null,
        nama_belakang: null,
        biografi: null,
        uid_firebase: null,
        profile_picture: null,
        id_role: 2,
        verified: true,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_lengkap: "Sherina Yui",
        username: "sherina",
        no_hp: "080000000001",
        email: "sherina@gmail.com",
        password:
          "$2a$12$I8MWoQ7NQne7ae.ClwF6XOmfl8Z6Vd/k3zHeLJSADedaSzy1fbGj2",
        nama_depan: null,
        nama_belakang: null,
        biografi: null,
        uid_firebase: null,
        profile_picture: "chibi1.jpg",
        id_role: 3,
        verified: true,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_lengkap: "Marlina Sati",
        username: "marlina",
        no_hp: "080000000002",
        email: "marlina@gmail.com",
        password:
          "$2a$12$I8MWoQ7NQne7ae.ClwF6XOmfl8Z6Vd/k3zHeLJSADedaSzy1fbGj2",
        nama_depan: null,
        nama_belakang: null,
        biografi: null,
        uid_firebase: null,
        profile_picture: "chibi2.jpg",
        id_role: 3,
        verified: true,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_lengkap: "Yuka Mega",
        username: "yuka",
        no_hp: "080000000003",
        email: "yuka@gmail.com",
        password:
          "$2a$12$I8MWoQ7NQne7ae.ClwF6XOmfl8Z6Vd/k3zHeLJSADedaSzy1fbGj2",
        nama_depan: null,
        nama_belakang: null,
        biografi: null,
        uid_firebase: null,
        profile_picture: "chibi3.jpg",
        id_role: 3,
        verified: true,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_lengkap: "Faiq Dermawan",
        username: "faiq",
        no_hp: "080000000004",
        email: "faiq@gmail.com",
        password:
          "$2a$12$I8MWoQ7NQne7ae.ClwF6XOmfl8Z6Vd/k3zHeLJSADedaSzy1fbGj2",
        nama_depan: null,
        nama_belakang: null,
        biografi: null,
        uid_firebase: null,
        profile_picture: "chibi4.jpg",
        id_role: 3,
        verified: true,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_lengkap: "Yuka Mega",
        username: "yuka",
        no_hp: "080000000005",
        email: "yuka@gmail.com",
        password:
          "$2a$12$I8MWoQ7NQne7ae.ClwF6XOmfl8Z6Vd/k3zHeLJSADedaSzy1fbGj2",
        nama_depan: null,
        nama_belakang: null,
        biografi: null,
        uid_firebase: null,
        profile_picture: "chibi5.jpg",
        id_role: 3,
        verified: true,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
