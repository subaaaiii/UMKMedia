const {
  kelas_detail,
  kelas_materi,
  kelas_benefit,
  kelas_mentor,
  kelas_rating,
  kelas_regist,
  kelas_detail_materi,
  kelas_detail_mentor,
  sub_materi_kelas,
  kelas_transaksi,
  kelas_wishlist,
  kelas_tugas
} = require("../models");
const {
  kelas_bisnis,
  kelas_kategori,
  kelas_level,
  kelas_diskon,
  sequelize,
  User,
  user_pribadi,
  kelas_harga,
} = require("../models");
const { Sequelize } = require("sequelize");
const utility = require("./utility");
const { Op } = require("sequelize");
const fs = require("fs");

module.exports = {
  getKategoriKelas: async (req, res) => {
    try {
      const result = await kelas_kategori.findAll({
        attributes: ["id", "nama"],
      });

      res.status(200).send({
        message: "succes",
        data: result,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  getLevelKelas: async (req, res) => {
    try {
      const result = await kelas_level.findAll({
        attributes: ["id", "nama"],
      });

      res.status(200).send({
        message: "succes",
        data: result,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error"});
    }
  },

  getKelasBisnis: async (req, res) => {
    try {
      const { kategori, level, harga } = req.body;
      const search = req.body.search || "";
      let dataHarga;
      if (harga && harga.length > 0) {
        dataHarga = await kelas_harga.findAll({
          where: {
            id: {
              [Op.in]: harga,
            },
          },
        });
      }

      let dataKelas;
      if (kategori.length > 0 || level.length > 0) {
        if (kategori.length > 0 && level.length === 0) {
          dataKelas = await kelas_bisnis.findAll({
            where: {
              nama: {
                [Op.like]: `%${search || ""}%`,
              },
              id_kelas_kategori: {
                [Op.in]: kategori,
              },
              is_deleted: 0,
            },
            include: [kelas_kategori, kelas_level, kelas_regist, kelas_rating],
          });
        } else if (kategori.length === 0 && level.length > 0) {
          dataKelas = await kelas_bisnis.findAll({
            where: {
              nama: {
                [Op.like]: `%${search}%`,
              },
              id_kelas_level: {
                [Op.in]: level,
              },
              is_deleted: 0,
            },
            include: [kelas_kategori, kelas_level, kelas_regist, kelas_rating],
          });
        } else {
          dataKelas = await kelas_bisnis.findAll({
            where: {
              nama: {
                [Op.like]: `%${search}%`,
              },
              id_kelas_level: {
                [Op.in]: level,
              },
              id_kelas_kategori: {
                [Op.in]: kategori,
              },
              is_deleted: 0,
            },
            include: [kelas_kategori, kelas_level, kelas_regist, kelas_rating],
          });
        }
      } else {
        dataKelas = await kelas_bisnis.findAll({
          where: {
            nama: {
              [Op.like]: `%${search}%`,
            },
            is_deleted: 0,
          },
          include: [kelas_kategori, kelas_level, kelas_regist, kelas_rating],
        });
      }

      const filterKelasById = (dataKelas, dataHarga, harga) => {
        return new Promise(function (resolve, reject) {
          const hasilFilter = dataKelas.filter((kelas) => {
            const hargaKelas = kelas.harga;
            const filter = dataHarga.find((filter) => {
              console.log({
                1: harga.includes(filter.id),
                2: hargaKelas >= filter.harga_min,
                3: hargaKelas <= filter.harga_max,
                hargaKelas,
                filterMax: filter.harga_max,
                filterMin: filter.harga_min,
              });
              return (
                harga.includes(filter.id) &&
                hargaKelas >= filter.harga_min &&
                hargaKelas <= filter.harga_max
              );
            });
            return filter !== undefined;
          });

          resolve(hasilFilter);
        });
      };

      let coba;
      if (harga && harga.length > 0) {
        filterKelasById(dataKelas, dataHarga, harga)
          .then((hasilFilter) => {
            dataKelas = hasilFilter;
            coba = hasilFilter;

            res.status(200).send({
              dataKelas,
              dataHarga,
              coba,
            });
          })
          .catch((error) => console.log(error));
      } else {
        res.status(200).send({
          dataKelas,
          dataHarga,
          coba,
        });
      }

      // const dataUser = await User.findAll();

      //   const result = await kelas_bisnis.findAll({
      //     attributes: [
      //       "id",
      //       "nama",
      //       "image",
      //       "images_link",
      //       "harga",
      //       [
      //         sequelize.literal(
      //           "ROUND(COALESCE(SUM(kelas_ratings.nilai), 0) / COUNT(DISTINCT kelas_ratings.id_user),1)"
      //         ),
      //         "rata_nilai",
      //       ],
      //       [
      //         sequelize.fn(
      //           "COUNT",
      //           sequelize.fn("DISTINCT", sequelize.col("kelas_ratings.id_user"))
      //         ),
      //         "jumlah_penilai",
      //       ],
      //       [
      //         sequelize.literal(
      //           "(SELECT COUNT(*) FROM kelas_regist WHERE kelas_regist.id_kelas_bisnis = kelas_bisnis.id)"
      //         ),
      //         "jumlah_pendaftar",
      //       ],
      //     ],
      //     include: [
      //       { model: kelas_kategori, attributes: ["nama"] },
      //       { model: kelas_level, attributes: ["nama"] },
      //       { model: kelas_rating, attributes: [] },
      //       {
      //         model: kelas_diskon,
      //         attributes: ["nama", "jumlah_persen"],
      //         through: { attributes: [] },
      //       },
      //     ],
      //     where: {
      //       ...(kategori ? { "$kelas_kategori.id$": kategori } : {}),
      //       ...(level ? { "$kelas_level.id$": level } : {}),
      //       ...(harga1 && harga2
      //         ? { harga: { [Op.between]: [harga1, harga2] } }
      //         : {}),
      //     },
      //     group: ["kelas_bisnis.id"],
      //   });

      //   res.json(dataKelas, dataUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error"});
    }
  },

  getDetailKelasBisnis: async (req, res) => {
    try {
      const { id } = req.body;
      const result = await kelas_detail.findAll({
        where: {
          ...(id ? { id: id } : {}),
        },
        attributes: ["id", "deskripsi", "id_kelas_bisnis"],
        include: [
          {
            model: kelas_materi,
            attributes: ["materi", "link", "deskripsi"],
          },
          {
            model: kelas_tugas,
            attributes: ["judul", "deskripsi"],
          },
          {
            model: kelas_benefit,
            attributes: ["benefit", "image", "images_link", "deskripsi"],
            through: { attributes: [] },
          },
          {
            model: kelas_mentor,
            attributes: [
              "nama",
              "jabatan",
              "perusahaan",
              "deskripsi",
              "image",
              "images_link",
            ],
            through: { attributes: [] },
          },
          {
            model: kelas_rating,
            attributes: [
              "komentar",
              "id_user",
              //  [sequelize.literal('(SELECT SUM(nilai) FROM kelas_rating WHERE kelas_rating.id_kelas_bisnis = kelas_detail.id_kelas_bisnis)'), 'total_nilai']
            ],
            limit: 2,
            required: false,
            include: [
              {
                model: User,
                attributes: ["username", "profile_picture", "picture_link"],
                include: [user_pribadi],

                required: false,
              },
            ],
          },
          {
            model: kelas_bisnis,
            where: { is_deleted: 0 },
            attributes: [
              "nama",
              "image",
              "images_link",
              "harga",
              [
                sequelize.literal(
                  "(SELECT COUNT(*) FROM kelas_regist WHERE kelas_regist.id_kelas_bisnis = kelas_bisni.id)"
                ),
                "jumlah_pendaftar",
              ],
              [
                sequelize.literal(
                  "(SELECT ROUND(SUM(nilai) / COUNT(id_user),1) FROM kelas_rating WHERE kelas_rating.id_kelas_bisnis = kelas_bisni.id)"
                ),
                "total_nilai",
              ],
            ],
            include: [
              { model: kelas_kategori, attributes: ["nama", "id"] },
              { model: kelas_level, attributes: ["nama", "id"] },
              { model: kelas_regist, attributes: [] },
              {
                model: kelas_diskon,
                attributes: ["nama", "jumlah_persen"],
                through: { attributes: [] },
              },
              {
                model: kelas_rating,
                attributes: [],
              },
            ],
          },
        ],
      });

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // untuk testing thoriq
  getKelasBisnisTest: async (req, res) => {
    try {
      const { kategori, level } = req.body;
      //cek or create view rating regist
      await db.sequelize.query(utility.viewRatingRegist);

      let query = `
                SELECT 
                    kelas_bisnis.nama,
                    kelas_bisnis.harga,
                    view_rating_regist.rating,
                    view_rating_regist.jumlah_penilai,
                    view_rating_regist.jumlah_pendaftar,
                    kelas_kategori.nama AS kategori,
                    kelas_level.nama AS level
                FROM kelas_bisnis
                LEFT JOIN kelas_kategori ON kelas_bisnis.id_kelas_kategori = kelas_kategori.id
                LEFT JOIN kelas_level ON kelas_bisnis.id_kelas_level = kelas_level.id
                LEFT JOIN view_rating_regist ON kelas_bisnis.id = view_rating_regist.kelas_bisnis_id
            `;
      if (kategori) query = query + " WHERE kelas_kategori.id = :kategori";
      if (level) query = query + " AND kelas_level.id = :level";

      const result = await db.sequelize.query(query, {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
          kategori,
          level,
        },
        model: kelas_bisnis,
        mapToModel: true,
        include: [kelas_kategori, kelas_level],
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

  getKelasBisnisBackup: async (req, res) => {
    try {
      const { kategori, level, harga1, harga2 } = req.body;

      const result = await kelas_bisnis.findAll({
        attributes: [
          "id",
          "nama",
          "image",
          "images_link",
          "harga",
          [
            sequelize.literal(
              "ROUND(COALESCE(SUM(kelas_ratings.nilai), 0) / COUNT(DISTINCT kelas_ratings.id_user),1)"
            ),
            "rata_nilai",
          ],
          [
            sequelize.fn(
              "COUNT",
              sequelize.fn("DISTINCT", sequelize.col("kelas_ratings.id_user"))
            ),
            "jumlah_penilai",
          ],
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM kelas_regist WHERE kelas_regist.id_kelas_bisnis = kelas_bisnis.id)"
            ),
            "jumlah_pendaftar",
          ],
        ],
        include: [
          { model: kelas_kategori, attributes: ["nama"] },
          { model: kelas_level, attributes: ["nama"] },
          { model: kelas_rating, attributes: [] },
          {
            model: kelas_diskon,
            attributes: ["nama", "jumlah_persen"],
            through: { attributes: [] },
          },
        ],
        where: {
          ...(kategori ? { "$kelas_kategori.id$": kategori } : {}),
          ...(level ? { "$kelas_level.id$": level } : {}),
          ...(harga1 && harga2
            ? { harga: { [Op.between]: [harga1, harga2] } }
            : {}),
        },
        group: ["kelas_bisnis.id"],
      });

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // code zainur
  getHargaFilter: async (req, res) => {
    try {
      const result = await kelas_harga.findAll();

      res.status(200).send({
        message: "success",
        data: result,
      });
    } catch (error) {
      res.status(500).json({ message: "Internak Server Error" });
    }
  },

  //Post data kelas bisnis - subairi
  createNewKelasBisnis: async (req, res) => {
    try {
      console.log(req.body);
      const {
        nama,
        tingkatKesulitan,
        harga,
        namaPemateri,
        jabatan,
        perusahaan,
        deskripsiPemateri,
        deskripsi,
        judul_tugas,
        deskripsi_tugas,
        kelasKategori,
      } = req.body;
      let linkBanner = null;
      let linkFotoPemateri = null;

      if (req.files.linkBanner && req.files.linkBanner.length > 0) {
        linkBanner = req.files.linkBanner[0].filename;
      } else linkBanner = "no-image-banner.png";

      if (req.files.linkFotoPemateri && req.files.linkFotoPemateri.length > 0) {
        linkFotoPemateri = req.files.linkFotoPemateri[0].filename;
      } else linkFotoPemateri = "no-image-mentor.png";

      const newKelasBisnis = await kelas_bisnis.create({
        nama: nama,
        id_kelas_level: tingkatKesulitan,
        harga: harga,
        image: linkBanner,
        id_kelas_kategori: kelasKategori,
      });

      const newKelasDetail = await kelas_detail.create({
        deskripsi,
        id: newKelasBisnis.id,
        id_kelas_bisnis: newKelasBisnis.id,
      });

      const newKelasMentor = await kelas_mentor.create({
        nama: namaPemateri,
        jabatan,
        perusahaan,
        deskripsi : deskripsiPemateri,
        image: linkFotoPemateri,
      });
       await kelas_tugas.create({
        judul : judul_tugas,
        deskripsi : deskripsi_tugas,
        id_kelas_detail: newKelasDetail.id,
      });

      await kelas_detail_mentor.create({
        id_kelas_detail: newKelasDetail.id,
        id_kelas_mentor: newKelasMentor.id,
      });

      const materis = [];
      Object.keys(req.body).forEach((key) => {
        const match = key.match(/^materis\[(\d+)\]\.(materi|link|deskripsi)$/);
        if (match) {
          const index = parseInt(match[1]);
          const field = match[2];
          const value = req.body[key];

          if (!materis[index]) {
            materis[index] = {};
          }
          materis[index][field] = value;
        }
      });

      materis.forEach(async (materi, index) => {
        try {
          if (materi && materi.materi !== "") {
            const newKelasMateri = await kelas_materi.create({
              materi: materi.materi,
              link: materi.link || "",
              deskripsi: materi.deskripsi || "",
              urutan: index + 1,
              id_kelas_detail: newKelasDetail.id,
            });

            await kelas_detail_materi.create({
              id_kelas_detail: newKelasDetail.id,
              id_kelas_materi: index + 1,
            });

            await sub_materi_kelas.create({
              id_materi: newKelasMateri.id,
              nama: "Sub Materi " + (index + 1),
              // deskripsi: materi.deskripsi || '',
              link: materi.link || "",
            });
          }
        } catch (error) {
          console.error(error);
        }
      });
      res.status(201).json({
        message: "Berhasil menambahkan data kelas bisnis",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //Update data kelas bisnis - subairi
  updateKelasBisnis: async (req, res) => {
    try {
      console.log(req.body);
      const { id } = req.body;
      const mentor = await kelas_detail_mentor.findOne({
        attributes: ["id_kelas_mentor"],
        where: {
          id_kelas_detail: id,
        },
      });

      const kelasBisnis = await kelas_bisnis.findOne({
        attributes: ["image"],
        where: {
          id: id,
        },
      });
      const kelasMentor = await kelas_mentor.findOne({
        attributes: ["image"],
        where: {
          id: mentor.id_kelas_mentor,
        },
      });

      const kelasTugas = await kelas_tugas.findOne({
        where: {
          id_kelas_detail: id,
        },
      });

      let {
        nama,
        tingkatKesulitan,
        harga,
        namaPemateri,
        jabatan,
        perusahaan,
        deskripsiPemateri,
        deskripsi,
        judul_tugas,
        deskripsi_tugas,
        kelasKategori,
      } = req.body;
      let linkBanner = null;
      let linkFotoPemateri = null;

      if (req.files.linkBanner && req.files.linkBanner.length > 0) {
        linkBanner = req.files.linkBanner[0].filename;
      }

      if (req.files.linkFotoPemateri && req.files.linkFotoPemateri.length > 0) {
        linkFotoPemateri = req.files.linkFotoPemateri[0].filename;
      }

      // Update kelas bisnis
      await kelas_bisnis.update(
        {
          nama: nama,
          id_kelas_level: tingkatKesulitan,
          harga: harga,
          ...(linkBanner !== null && { image: linkBanner }),
          id_kelas_kategori: kelasKategori,
        },
        {
          where: {
            id: id,
          },
        }
      );

      // Update kelas mentor
      await kelas_mentor.update(
        {
          nama: namaPemateri,
          jabatan,
          perusahaan,
          deskripsi: deskripsiPemateri,
          ...(linkFotoPemateri !== null && { image: linkFotoPemateri }),
        },
        {
          where: {
            id: mentor.id_kelas_mentor,
          },
        }
      );

      await kelas_tugas.update({
        judul : judul_tugas,
        deskripsi : deskripsi_tugas,
      },
      {
        where: {
          id: kelasTugas.id,
        },
      }
    );

      // Update kelas detail
      await kelas_detail.update(
        {
          deskripsi: deskripsi,
        },
        {
          where: {
            id: id,
          },
        }
      );

      const materis = [];
      Object.keys(req.body).forEach((key) => {
        const match = key.match(/^materis\[(\d+)\]\.(materi|link|deskripsi)$/);
        if (match) {
          const index = parseInt(match[1]);
          const field = match[2];
          const value = req.body[key];

          if (!materis[index]) {
            materis[index] = {};
          }
          materis[index][field] = value;
        }
      });

      for (const [index, materi] of materis.entries()) {
        try {
          const existingMateri = await kelas_materi.findOne({
            where: {
              id_kelas_detail: id,
              urutan: index + 1,
            },
          });

          if (existingMateri) {
            if (materi.materi === "") {
              await sub_materi_kelas.destroy({
                where: {
                  id_materi: existingMateri.id,
                },
              });

              await kelas_materi.destroy({
                where: {
                  id_kelas_detail: id,
                  urutan: index + 1,
                },
              });

              // Hapus dari tabel relasi
              await kelas_detail_materi.destroy({
                where: {
                  id_kelas_detail: id,
                  id_kelas_materi: index + 1,
                },
              });
            } else {
              // Materi sudah ada, lakukan update
              await kelas_materi.update(
                {
                  materi: materi.materi,
                  link: materi.link,
                  deskripsi: materi.deskripsi,
                },
                {
                  where: {
                    id_kelas_detail: id,
                    urutan: index + 1,
                  },
                }
              );

              const updatedKelasMateri = await kelas_materi.findOne({
                attributes: ["id"],
                where: {
                  id_kelas_detail: id,
                  urutan: index + 1,
                },
              });
              await sub_materi_kelas.update(
                {
                  link: materi.link || "",
                },
                {
                  where: {
                    id_materi: updatedKelasMateri.id,
                  },
                }
              );
            }
          } else {
            // Materi baru, lakukan pembuatan baru
            if (materi.materi !== "") {
              const newKelasMateri = await kelas_materi.create({
                materi: materi.materi,
                link: materi.link,
                deskripsi: materi.deskripsi,
                id_kelas_detail: id,
                urutan: index + 1,
              });

              await sub_materi_kelas.create({
                id_materi: newKelasMateri.id,
                nama: "Sub Materi " + (index + 1),
                link: materi.link || "",
              });

              await kelas_detail_materi.create({
                id_kelas_detail: id,
                id_kelas_materi: index + 1,
              });
            }
          }
        } catch (error) {
          console.error(error);
        }
      }

      res.status(200).json({
        message: "Berhasil mengupdate data kelas bisnis",
      });

      if (
        req.files.linkBanner &&
        req.files.linkBanner.length > 0 &&
        kelasBisnis.image != "no-image-banner.png"
      ) {
        fs.unlinkSync("images/kelas/" + kelasBisnis.image);
      }

      if (
        req.files.linkFotoPemateri &&
        req.files.linkFotoPemateri.length > 0 &&
        kelasMentor.image != "no-image-mentor.png"
      ) {
        fs.unlinkSync("images/mentor/" + kelasMentor.image);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //Delete data kelas bisnis - subairi
  deleteKelasBisnis: async (req, res) => {
    const { id } = req.params;
    try {
      await kelas_bisnis.update(
        {
          is_deleted: 1,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(200).json({
        message: "Berhasil menghapus kelas bisnis",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }

    // const registered = await kelas_transaksi.findOne({
    //   attributes: ["id_kelas_bisnis"],
    //   where: {
    //     id_kelas_bisnis: id,
    //   },
    // });

    // if (!registered) {
    //   let transaction;
    //   try {
    //     transaction = await sequelize.transaction();

    //     const mentor = await kelas_detail_mentor.findOne({
    //       attributes: ["id_kelas_mentor"],
    //       where: {
    //         id_kelas_detail: id,
    //       },
    //     });

    //     const kelasBisnis = await kelas_bisnis.findOne({
    //       attributes: ["image"],
    //       where: {
    //         id: id,
    //       },
    //     });

    //     const kelasMentor = await kelas_mentor.findOne({
    //       attributes: ["image"],
    //       where: {
    //         id: mentor.id_kelas_mentor,
    //       },
    //     });

    //     const toBeDeletedKelasMateri = await kelas_materi.findOne({
    //       attributes: ["id"],
    //       where: {
    //         id_kelas_detail: id,
    //       },
    //     });

    //     if (toBeDeletedKelasMateri) {
    //       await kelas_materi.destroy({
    //         where: {
    //           id: toBeDeletedKelasMateri.id,
    //         },
    //         transaction,
    //       });

    //       await sub_materi_kelas.destroy({
    //         where: {
    //           id_materi: toBeDeletedKelasMateri.id,
    //         },
    //         transaction,
    //       });

    //       await kelas_detail_materi.destroy({
    //         where: {
    //           id_kelas_detail: id,
    //         },
    //         transaction,
    //       });
    //     }

    //     await kelas_mentor.destroy({
    //       where: {
    //         id: mentor.id_kelas_mentor,
    //       },
    //       transaction,
    //     });

    //     await kelas_detail_mentor.destroy({
    //       where: {
    //         id_kelas_detail: id,
    //       },
    //       transaction,
    //     });

    //     await kelas_bisnis.destroy({
    //       where: {
    //         id: id,
    //       },
    //       transaction,
    //     });

    //     await kelas_detail.destroy({
    //       where: {
    //         id: id,
    //       },
    //       transaction,
    //     });

    //     if (kelasBisnis.image !== "no-image-banner.png") {
    //       fs.unlinkSync("images/kelas/" + kelasBisnis.image);
    //     }

    //     if (kelasMentor.image !== "no-image-mentor.png") {
    //       fs.unlinkSync("images/mentor/" + kelasMentor.image);
    //     }

    //     await transaction.commit();

    //     res.status(200).json({ message: "Kelas Bisnis deleted successfully." });
    //   } catch (error) {
    //     console.error("Error deleting kelas bisnis:", error);
    //     if (transaction) await transaction.rollback();
    //     res.status(500).json({ error: "Internal server error" });
    //   }
    // } else {
    //   res.status(500).json({ error: "Kelas Ini sedang ada pendaftar" });
    // }
  },
};
