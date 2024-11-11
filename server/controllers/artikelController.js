// const db = require("../models");
// const artikelModel = db.Artikel;
// const kategoriModel = db.Kategori;

// module.exports = {
//   getKategori: async (req, res) => {
//     try {
//       const result = await kategoriModel.findAll({});

//       res.status(200).send({
//         message: "succes",
//         data: result,
//       });
//     } catch (error) {
//       res.status(400).send({
//         error: error.message,
//       });
//     }
//   },

//   getAllArtikelByKategori: async (req, res) => {
//     try {
//       const { kategori } = req.body;
//       let result = "";
//       console.log({ res: kategori });
//       if (kategori.toUpperCase() === "SEMUA") {
//         result = await artikelModel.findAll({
//           include: [
//             {
//               model: kategoriModel,
//               attributes: ["nama_kategori"],
//             },
//           ],
//         });
//       } else {
//         result = await artikelModel.findAll({
//           include: [
//             {
//               model: kategoriModel,
//               attributes: ["nama_kategori"],
//               where: {
//                 nama_kategori: kategori,
//               },
//             },
//           ],
//         });
//       }

//       res.status(200).send({
//         message: "succes",
//         data: result,
//       });
//     } catch (error) {
//       res.status(400).send({
//         error: error.message,
//       });
//     }
//   },

//   getArtikelMenarik: async (req, res) => {
//     try {
//       const { kategori, limit } = req.body;
//       const numericLimit = parseInt(limit, 10);

//       if (kategori.toUpperCase() === "SEMUA") {
//         result = await artikelModel.findAll({
//           include: [
//             {
//               model: kategoriModel,
//               attributes: ["nama_kategori"],
//             },
//           ],
//           limit: numericLimit,
//           order: [["id", "DESC"]],
//         });
//       } else {
//         result = await artikelModel.findAll({
//           include: [
//             {
//               model: kategoriModel,
//               attributes: ["nama_kategori"],
//               where: {
//                 nama_kategori: kategori,
//               },
//             },
//           ],
//           limit: numericLimit,
//           order: [["id", "DESC"]],
//         });
//       }

//       res.status(200).send({
//         message: "succes",
//         data: result,
//       });
//     } catch (error) {
//       res.status(400).send({
//         error: error.message,
//       });
//     }
//   },
// };

const db = require("../models");
const Artikel = db.Artikel;
const Kategori = db.Kategori;

module.exports = {
  getKategori: async (req, res) => {
    try {
      const result = await Kategori.findAll({});
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

  getAllArtikelByKategori: async (req, res) => {
    try {
      const { kategori } = req.body;
      let result = "";
      if (
        kategori === "SEMUA" ||
        kategori === "semua" ||
        kategori === "Semua"
      ) {
        result = await Artikel.findAll({
          include: [
            {
              model: Kategori,
              attributes: ["nama_kategori"],
            },
          ],
        });
      } else {
        result = await Artikel.findAll({
          include: [
            {
              model: Kategori,
              attributes: ["nama_kategori"],
              where: {
                nama_kategori: kategori,
              },
            },
          ],
        });
      }

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

  getArtikelMenarik: async (req, res) => {
    try {
      const { kategori, limit } = req.body;
      const numericLimit = parseInt(limit, 10);
      let result = "";

      if (
        kategori === "SEMUA" ||
        kategori === "semua" ||
        kategori === "Semua"
      ) {
        result = await Artikel.findAll({
          include: [
            {
              model: Kategori,
              attributes: ["nama_kategori"],
            },
          ],
          limit: numericLimit,
          order: [["id", "DESC"]],
        });
      } else {
        result = await Artikel.findAll({
          include: [
            {
              model: Kategori,
              attributes: ["nama_kategori"],
              where: {
                nama_kategori: kategori,
              },
            },
          ],
          limit: numericLimit,
          order: [["id", "DESC"]],
        });
      }

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

  getAllArtikel: async (req, res) => {
    try {
      // Mengambil semua artikel dari database tanpa memfilter kategori
      const result = await Artikel.findAll();

      // Mengirimkan respons dengan status 200 dan data artikel
      res.status(200).send({
        message: "success",
        data: result,
      });
    } catch (error) {
      // Mengirimkan respons dengan status 400 dan pesan error jika terjadi kesalahan
      res.status(400).send({
        error: error.message,
      });
    }
  },

  createArtikel: async (req, res) => {
    try {
      const { judul, deskripsi, penerbit, tanggal, link, id_kategori } =
        req.body;
      // const imagePath = req.file ? req.file.path : null;
      const imagePath = req.file ? req.file.filename : null;

      const artikel = await Artikel.create({
        judul: judul,
        deskripsi: deskripsi,
        penerbit: penerbit,
        images: imagePath,
        tanggal: tanggal,
        link: link,
        id_kategori: id_kategori,
      });

      res.status(201).send({
        message: "Artikel berhasil dibuat",
        data: artikel,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        error: error.message,
      });
    }
  },

  getArtikelById: async (req, res) => {
    try {
      const { id } = req.params;

      const artikel = await Artikel.findByPk(id, {
        include: [{ model: Kategori, attributes: ["id", "nama_kategori"] }],
      });

      if (!artikel) {
        return res.status(404).send({ message: "Artikel tidak ditemukan" });
      }

      res.status(200).send({
        message: "Artikel berhasil ditemukan",
        data: artikel,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },

  updateArtikel: async (req, res) => {
    try {
      const { id } = req.params;
      const { judul, deskripsi, penerbit, images, tanggal, link, id_kategori } =
        req.body;
      const imagePath = req.file ? req.file.filename : null;

      const artikel = await Artikel.findByPk(id);

      if (!artikel) {
        return res.status(404).send({ message: "Artikel tidak ditemukan" });
      }

      artikel.judul = judul;
      artikel.deskripsi = deskripsi;
      artikel.penerbit = penerbit;
      artikel.images = imagePath ? imagePath : artikel.images;
      artikel.tanggal = tanggal;
      artikel.link = link;
      artikel.id_kategori = id_kategori;

      await artikel.save();

      res.status(200).send({
        message: "Artikel berhasil diperbarui",
        data: artikel,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },

  deleteArtikel: async (req, res) => {
    try {
      const { id } = req.params;

      const artikel = await Artikel.findByPk(id);

      if (!artikel) {
        return res.status(404).send({ message: "Artikel tidak ditemukan" });
      }

      await artikel.destroy();

      res.status(200).send({ message: "Artikel berhasil dihapus" });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
};
