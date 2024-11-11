const db = require("../models");
const departemen = require("../models/departemen");
const lowonganModel = db.lowongan_pekerjaan;

module.exports = {
  getAllDepartemen: async (req, res) => {
    res.status(200).send({
      message: "succes",
      data: "result",
    });
  },

  getAllLowongan: async (req, res) => {
    try {
      const result = await lowonganModel.findAll({
        attributes: {
          exclude: ["id_departemen"], // Mengecualikan kolom id_departemen
        },
        include: [
          { model: db.sequelize.model("departemen") },
          { model: db.sequelize.model("periode_pekerjaan") },
          { model: db.sequelize.model("tipe_pekerjaan") },
          { model: db.sequelize.model("jenjang_pekerjaan") },
        ],
      });

      res.status(200).send({
        message: "success",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
  getLowonganById: async (req, res) => {
    try {
      const result = await lowonganModel.findOne({
        where: {
          id: req.params.id_lowongan,
        },
        attributes: {
          exclude: ["id_departemen"], // Mengecualikan kolom id_departemen
        },
        include: [
          { model: db.sequelize.model("departemen") },
          { model: db.sequelize.model("periode_pekerjaan") },
          { model: db.sequelize.model("tipe_pekerjaan") },
          { model: db.sequelize.model("jenjang_pekerjaan") },
        ],
      });

      res.status(200).send({
        message: "success",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
};
