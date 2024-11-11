const utility = require("./utility");
const {
  sequelize,
  kelas_bisnis,
  kelas_regist,
  kelas_detail,
  kelas_materi,
  kelas_rating,
  User,
  sub_materi_kelas,
  kelas_kuis,
} = require("../models");

module.exports = {
  kelasUserAll: async (req, res) => {
    try {
      const userData = req.dataToken;
      const getUser = await User.findOne({
        where: {
          email: userData.email,
        },
      });
      if (!getUser) {
        throw new Error("User not Found");
      }
      //   const { userID } = req.body;

      const result = await kelas_bisnis.findAll({
        include: [
          {
            model: kelas_regist,
            attributes: ["progress"],
            where: { id_user: getUser.id },
          },
          { model: kelas_detail, attributes: [] },
        ],
        attributes: [
          "id",
          "nama",
          "image",
          "images_link",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM kelas_detail_materi WHERE kelas_detail_materi.id_kelas_detail = kelas_detail.id)"
            ),
            "total_materi",
          ],
          [
            sequelize.literal(
              `ROUND(kelas_regists.progress * 100 / (SELECT COUNT(*) FROM kelas_detail_materi WHERE kelas_detail_materi.id_kelas_detail = kelas_detail.id))`
            ),
            "persentase",
          ],
        ],
      });

      res.status(200).send({
        message: "succes",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },

  kelasUserNonProgress: async (req, res) => {
    try {
      //   const { userID } = req.body;
      const userData = req.dataToken;
      const getUser = await User.findOne({
        where: {
          email: userData.email,
        },
      });
      if (!getUser) {
        throw new Error("User not Found");
      }

      const result = await kelas_bisnis.findAll({
        include: [
          {
            model: kelas_regist,
            attributes: ["progress"],
            where: { id_user: getUser.id },
          },
          { model: kelas_detail, attributes: [] },
        ],
        attributes: [
          "id",
          "nama",
          "image",
          "images_link",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM kelas_detail_materi WHERE kelas_detail_materi.id_kelas_detail = kelas_detail.id)"
            ),
            "total_materi",
          ],
          [
            sequelize.literal(
              `ROUND(kelas_regists.progress * 100 / (SELECT COUNT(*) FROM kelas_detail_materi WHERE kelas_detail_materi.id_kelas_detail = kelas_detail.id))`
            ),
            "persentase",
          ],
        ],
        having: sequelize.literal("persentase = 0"),
      });

      res.status(200).send({
        message: "succes",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },

  kelasUserProgress: async (req, res) => {
    try {
      //   const { userID } = req.body;
      const userData = req.dataToken;
      const getUser = await User.findOne({
        where: {
          email: userData.email,
        },
      });
      if (!getUser) {
        throw new Error("User not Found");
      }

      const result = await kelas_bisnis.findAll({
        include: [
          {
            model: kelas_regist,
            attributes: ["progress"],
            where: { id_user: getUser.id },
          },
          { model: kelas_detail, attributes: [] },
        ],
        attributes: [
          "id",
          "nama",
          "image",
          "images_link",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM kelas_detail_materi WHERE kelas_detail_materi.id_kelas_detail = kelas_detail.id)"
            ),
            "total_materi",
          ],
          [
            sequelize.literal(
              `ROUND(kelas_regists.progress * 100 / (SELECT COUNT(*) FROM kelas_detail_materi WHERE kelas_detail_materi.id_kelas_detail = kelas_detail.id))`
            ),
            "persentase",
          ],
        ],
        having: sequelize.literal("persentase BETWEEN 1 AND 99"),
      });

      res.status(200).send({
        message: "succes",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },

  kelasUserComplete: async (req, res) => {
    try {
      //   const { userID } = req.body;
      const userData = req.dataToken;
      const getUser = await User.findOne({
        where: {
          email: userData.email,
        },
      });
      if (!getUser) {
        throw new Error("User not Found");
      }

      const result = await kelas_bisnis.findAll({
        include: [
          {
            model: kelas_regist,
            attributes: ["progress"],
            where: { id_user: getUser.id },
          },
          { model: kelas_detail, attributes: [] },
        ],
        attributes: [
          "id",
          "nama",
          "image",
          "images_link",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM kelas_detail_materi WHERE kelas_detail_materi.id_kelas_detail = kelas_detail.id)"
            ),
            "total_materi",
          ],
          [
            sequelize.literal(
              `ROUND(kelas_regists.progress * 100 / (SELECT COUNT(*) FROM kelas_detail_materi WHERE kelas_detail_materi.id_kelas_detail = kelas_detail.id))`
            ),
            "persentase",
          ],
        ],
        having: sequelize.literal("persentase = 100"),
      });

      res.status(200).send({
        message: "succes",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },

  kelasUserLastProgress: async (req, res) => {
    try {
      //   const { userID } = req.body;
      const userData = req.dataToken;
      const getUser = await User.findOne({
        where: {
          email: userData.email,
        },
      });
      if (!getUser) {
        throw new Error("User not Found");
      }

      const result = await kelas_bisnis.findAll({
        include: [
          {
            model: kelas_regist,
            attributes: ["progress"],
            where: { id_user: getUser.id },
          },
          { model: kelas_detail, attributes: [], as: "kelas_detail" },
        ],
        attributes: [
          "id",
          "nama",
          "image",
          "images_link",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM kelas_detail_materi WHERE kelas_detail_materi.id_kelas_detail = kelas_detail.id)"
            ),
            "total_materi",
          ],
          [
            sequelize.literal(
              `ROUND(kelas_regists.progress * 100 / (SELECT COUNT(*) FROM kelas_detail_materi WHERE kelas_detail_materi.id_kelas_detail = kelas_detail.id))`
            ),
            "persentase",
          ],
        ],
        order: [[{ model: kelas_regist }, "updatedAt", "DESC"]],
      });

      res.status(200).send({
        message: "succes",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },

  kelasUserDetail: async (req, res) => {
    try {
      const { kelasID } = req.body;
      const dataUser = req.dataToken;
      const user = await User.findOne({ where: { email: dataUser.email } });
      const result = await kelas_bisnis.findOne({
        where: { id: kelasID },
        include: [
          {
            model: kelas_regist,
            attributes: ["progress"],
            where: { id_user: user.id },
          },
          {
            model: kelas_rating,
            attributes: ["komentar", "createdAt"],
            include: [
              {
                model: User,
                attributes: ["username", "profile_picture", "picture_link"],
                required: false,
              },
            ],
          },
          {
            model: kelas_detail,
            attributes: ["deskripsi"],
            include: [
              {
                model: kelas_materi,
                attributes: ["id", "materi", "link", "deskripsi"],
              },
            ],
          },
        ],
        attributes: [
          "id",
          "nama",
          "image",
          "images_link",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM kelas_detail_materi WHERE kelas_detail_materi.id_kelas_detail = kelas_detail.id)"
            ),
            "total_materi",
          ],
          [
            sequelize.literal(
              `ROUND(kelas_regists.progress * 100 / (SELECT COUNT(*) FROM kelas_detail_materi WHERE kelas_detail_materi.id_kelas_detail = kelas_detail.id))`
            ),
            "persentase",
          ],
        ],
      });

      if (result) {
        res.json(result);
      } else res.json("wkwkwkkw");
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  MulaiMateriUser: async (req, res) => {
    try {
      const { materiID, kelasID } = req.body;
      const dataUser = req.dataToken;

      const user = await User.findOne({ where: { email: dataUser.email } });
      const regist = await kelas_regist.findOne({
        where: { id_kelas_bisnis: kelasID, id_user: user.id },
      });
      const materi = await kelas_materi.findOne({
        where: { id: materiID },
        include: [{ model: sub_materi_kelas, attributes: ["nama", "link"] }],
        attributes: ["materi", "urutan"],
      });

      const progress_user = await kelas_bisnis.findOne({
        where: { id: kelasID },
        include: [
          {
            model: kelas_regist,
            attributes: ["progress"],
            where: { id_user: user.id },
          },
          {
            model: kelas_detail,
            attributes: [],
          },
        ],
        attributes: [
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM kelas_detail_materi WHERE kelas_detail_materi.id_kelas_detail = kelas_detail.id)"
            ),
            "total_materi",
          ],
          [
            sequelize.literal(
              `ROUND(kelas_regists.progress * 100 / (SELECT COUNT(*) FROM kelas_detail_materi WHERE kelas_detail_materi.id_kelas_detail = kelas_detail.id))`
            ),
            "persentase",
          ],
          [
            sequelize.literal(
              `(SELECT id FROM kelas_materi WHERE kelas_materi.id_kelas_detail = ${kelasID} AND id > ${materiID} LIMIT 1)`
            ),
            "next_kelas_materi_id",
          ],
          "nama",
        ],
      });

      const modul = await kelas_detail.findOne({
        where: { id_kelas_bisnis: kelasID },
        attributes: [],
        include: [
          {
            model: kelas_materi,
            attributes: ["id", "materi", "urutan", "title"],
          },
        ],
      });

      //cek progess user
      if (regist.progress >= materi.urutan) {
        utility.createResponse(
          res,
          200,
          true,
          "User Sudah Melewati Kelas Ini",
          { materi, progress_user, modul }
        );
      }
      if (
        regist.progress < materi.urutan &&
        materi.urutan - regist.progress == 1
      ) {
        //update progress
        const updateResult = await regist.update(
          { progress: regist.progress + 1 },
          { where: { where: { id_kelas_bisnis: kelasID, id_user: user.id } } }
        );
        console.log(updateResult);
        utility.createResponse(res, 200, true, "User Baru Akses Kelas Ini", {
          materi,
          progress_user,
          modul,
        });
      }
      if (
        regist.progress < materi.urutan &&
        materi.urutan - regist.progress > 1
      ) {
        utility.createResponse(res, 200, false, "User Melewati Urutan Kelas", {
          progress_user: regist.progress,
          urutan_materi: materi.urutan,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
