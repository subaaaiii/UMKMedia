const db = require("../models");
const kelasWishlistModel = db.kelas_wishlist;
const user = db.User;
const kelasBisnisModel = db.kelas_bisnis;
const kelasKategoriModel = db.kelas_kategori;
const kelasLevelModel = db.kelas_level;
const kelasRegistModel = db.kelas_regist;
const kelasRatingModel = db.kelas_rating;

module.exports = {
  getWishlistByIdUSer: async (req, res) => {
    try {
      const userData = req.dataToken;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });
      // console.log({ userData });
      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }
      const result = await kelasWishlistModel.findAll({
        where: {
          id_user: getuser.id,
          isRemove: false,
        },
        include: [
          user,
          {
            model: kelasBisnisModel,
            include: [
              kelasKategoriModel,
              kelasLevelModel,
              kelasRegistModel,
              kelasRatingModel,
            ],
          },
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

  getWishlistStatus: async (req, res) => {
    try {
      const userData = req.dataToken;
      const { id_kelas_bisnis } = req.body;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });
      console.log({ userData });
      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }
      const result = await kelasWishlistModel.findOne({
        where: {
          id_user: getuser.id,
          id_kelas_bisnis: id_kelas_bisnis,
        },
        attributes: ["id", "isRemove", "id_kelas_bisnis", "id_user"],
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

  changeWishlistBool: async (req, res) => {
    try {
      const userData = req.dataToken;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });

      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }

      const { id_kelas_bisnis } = req.body;

      const existingWishlist = await kelasWishlistModel.findOne({
        where: {
          id_user: getuser.id,
          id_kelas_bisnis: id_kelas_bisnis,
        },
      });

      if (existingWishlist) {
        const updatedValue = !existingWishlist.isRemove;
        await existingWishlist.update({ isRemove: updatedValue });

        res.status(200).send({
          message: `Wishlist status updated to ${updatedValue}`,
          data: existingWishlist,
        });
      } else {
        const newWishlist = await kelasWishlistModel.create({
          id_user: getuser.id,
          id_kelas_bisnis: id_kelas_bisnis,
          date_wishlist: new Date(),
        });

        res.status(200).send({
          message: "Wishlist created",
          data: newWishlist,
        });
      }
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
};
