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
const db = require("../models");
const { Sequelize } = require("sequelize");
const utility = require("./utility");
const { Op } = require("sequelize");
const fs = require("fs");
const Kelas_submission = db.kelas_submission;
const user = db.User;

module.exports = {

  getDetailSubmission: async (req, res) => {
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
      const { id_kelas } = req.body;
      const result = await Kelas_submission.findAll({
        where: {
          id_user: getuser.id,
          id_kelas_detail: id_kelas
        },
        attributes: ["id", "link", "is_accepted"],
      });

      res.json(result);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error });
    }
  },

  updateStatusSubmission: async (req, res) => {
    try {
      const { id, is_accepted } = req.body;  // Mendapatkan id submission dan status baru (is_accepted)
      
      // Cek apakah id dan is_accepted ada dalam body
      if (!id || is_accepted === undefined) {
        return res.status(400).json({ message: "id dan is_accepted harus ada dalam request" });
      }
  
      // Update status berdasarkan id
      const updatedSubmission = await Kelas_submission.update(
        { is_accepted },  // Data yang ingin diubah
        {
          where: {
            id,  // Berdasarkan id submission
          },
        }
      );
  
      // Jika submission berhasil diperbarui
      if (updatedSubmission[0] === 1) {
        return res.json({ success: true, message: "Status berhasil diubah" });
      } else {
        return res.status(400).json({ success: false, message: "Status gagal diubah" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  updateSubmission: async (req, res) => {
    try {
      const { id, link } = req.body;  // Mendapatkan id submission dan status baru (is_accepted)
      
      // Cek apakah id dan is_accepted ada dalam body
      
      console.log(id)
      // Update status berdasarkan id
      const updatedSubmission = await Kelas_submission.update(
        { link },  // Data yang ingin diubah
        {
          where: {
            id,  // Berdasarkan id submission
          },
        }
      );
  
      // Jika submission berhasil diperbarui
      if (updatedSubmission[0] === 1) {
        return res.json({ success: true, message: "Link berhasil diubah" });
      } else {
        return res.status(400).json({ success: false, message: "Status gagal diubah" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  getAllSubmission: async (req, res) => {
    try {
      const result = await Kelas_submission.findAll({
        order: [
          ['is_accepted', 'ASC'], // Urutkan berdasarkan is_accepted, 0 akan muncul terlebih dahulu
          ['updatedAt', 'DESC']    // Kemudian urutkan berdasarkan updatedAt, terbaru terlebih dahulu
        ],include: [
          {
            model: kelas_detail,
            attributes: ["deskripsi"],
            include: [
              {
                model: kelas_bisnis, // Menyertakan kelas_bisnis dari kelas_detail
                attributes: ["nama"], // Ganti dengan atribut yang ingin Anda ambil
              }
            ]
          },
          {
            model : user,
            attributes: ["nama_lengkap"]
          }
        ]
      });
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },


  getAllSubmissionByIdKelas: async (req, res) => {
    try {
      const { id_kelas_detail } = req.body;
      const result = await Kelas_submission.findAll({
        where: {
          id_kelas_detail: id_kelas_detail, // Menyaring berdasarkan id_kelas_detail
        },include: [
          {
            model: kelas_detail,
            attributes: ["deskripsi"],
            include: [
              {
                model: kelas_bisnis, // Menyertakan kelas_bisnis dari kelas_detail
                attributes: ["nama"], // Ganti dengan atribut yang ingin Anda ambil
              }
            ]
          },
          {
            model : user,
            attributes: ["nama_lengkap"]
          }
        ]
      });
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //Post data kelas bisnis - subairi
  createNewSubmission: async (req, res) => {
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

      console.log(req.body);
      const {
        id_kelas_detail,
        link
      } = req.body;
      console.log("isinya ", req.body)
      await Kelas_submission.create({
        link: link,
        id_user: getuser.id,
        id_kelas_detail: id_kelas_detail,
        is_accepted: 0
      });

      res.status(201).json({
        message: "Berhasil menambahkan submit tugas",
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
        judul: judul_tugas,
        deskripsi: deskripsi_tugas,
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
