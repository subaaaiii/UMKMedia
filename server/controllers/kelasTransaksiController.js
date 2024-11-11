const db = require("../models");
const { Op } = require('sequelize');
const user = db.User;
const kelasBisnisModel = db.kelas_bisnis;
const kelasBisnisDiskonModel = db.kelas_bisnis_diskon;
const kelasDiskonModel = db.kelas_diskon;
const kelasTransaksiModel = db.kelas_transaksi;
const kelasRegistModel = db.kelas_regist;

module.exports = {
  createTransaksi: async (req,res) => {
    try {
      const userData = req.dataToken;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id", "verified"],
      });
  
      const verified = getuser.verified;

      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }

      if (verified == false) {
        throw new Error("AKUN ANDA BELUM VERIFIED");
      }
      
      const { id_kelas_bisnis } = req.body;
   
      const getRegist = await kelasRegistModel.findOne({
        where: {
          id_user: getuser.id,
          id_kelas_bisnis: id_kelas_bisnis,
        },
        include: [user],
      });

      if (getRegist) {
        throw new Error("DATA REGIST SUDAH ADA");
      };

      const getTransaksi = await kelasTransaksiModel.findOne({
        where: {
          id_user: getuser.id,
          id_kelas_bisnis: id_kelas_bisnis,
          status_transaksi: {
            [Op.or]: ['pending', 'success'],
          },
        },
        include: [user, kelasBisnisModel],
      });

      if (getTransaksi) {
        throw new Error("DATA TRANSAKSI SUDAH ADA");
      };
      
      const kelasBisnis = await kelasBisnisModel.findByPk(id_kelas_bisnis);
      if (!kelasBisnis) {
        throw new Error(`Kelas bisnis with id ${id_kelas_bisnis} not found.`);
      }

      const kelasBisnisDiskon = await kelasBisnisDiskonModel.findOne({
        where: { id_kelas_bisnis: kelasBisnis.id },
      });

      const kelasDiskon = kelasBisnisDiskon
        ? await kelasDiskonModel.findByPk(kelasBisnisDiskon.id_kelas_diskon)
        : null;

      const harga = kelasBisnis.harga;
      const persenDiskon = kelasDiskon ? kelasDiskon.jumlah_persen : 0;
      const total = kelasDiskon ? harga * ((100 - persenDiskon) / 100) : harga;

      const currentDate = new Date();
      currentDate.setHours(currentDate.getHours() + 7);
      const expiredDate = new Date(currentDate);
      expiredDate.setHours(expiredDate.getHours() + 24);

      if(total===0){
        const result = await kelasTransaksiModel.create({
          id_user: getuser.id,
          id_kelas_bisnis: id_kelas_bisnis,
          harga: harga,
          status_transaksi: "success",
          isPaid: true,
          persen_diskon: persenDiskon,
          total: total,
          date_transaksi: currentDate,
          date_expired: expiredDate,
        });
        
        const data = await kelasRegistModel.create({
          id_user: getuser.id,
          id_kelas_bisnis: id_kelas_bisnis,
          tgl_daftar: currentDate,
          progress: 0,
        })
        res.status(200).send({
          message: "Transaksi created",
          data: result, 
          regist: data,
        });
      }else{
        const result = await kelasTransaksiModel.create({
          id_user: getuser.id,
          id_kelas_bisnis: id_kelas_bisnis,
          harga: harga,
          persen_diskon: persenDiskon,
          total: total,
          date_transaksi: currentDate,
          date_expired: expiredDate,
        });
        res.status(200).send({
          message: "Transaksi created",
          data: result, 
        });
      }
      
      
      }catch (error) {
        res.status(400).send({
          error: error.message,
        });
      }
  },

  changeTransaksiBool: async (req, res) => {
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
      const result = await kelasTransaksiModel.update({
        isPaid: true,
      },{where:
        {
          id_user:getuser.id,
          id_kelas_bisnis: id_kelas_bisnis
        }
      });
      res.status(200).send({
        message: "Transaksi Bool Updated",
        data: result, 
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },

  updateStatusTransaksi: async (req, res) => {
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

      const { id, status_transaksi } = req.body;
  
      console.log("id:", id)
      const transaction = await kelasTransaksiModel.findOne({
        where: {
          id: id,
          id_user: getuser.id,
        },
      });
      

      if (!transaction) {
        throw new Error(
          `Transaction with id ${id} not found for the current user.`
        );
      }

      let id_kelas_bisnis;
      const data = await kelasTransaksiModel.findByPk(id, {
        attributes: ["id_kelas_bisnis"],
      });
      if(data) {
        id_kelas_bisnis = data.id_kelas_bisnis;
      } else {
        throw new Error(`No data found for id ${id}`)
      }
      if (
        status_transaksi &&
        ["success", "canceled", "pending"].includes(status_transaksi)
      ) {
        await transaction.update({ status_transaksi: status_transaksi });

        if (status_transaksi === "success") {
          await kelasRegistModel.create({
            id_user: getuser.id,
            id_kelas_bisnis: id_kelas_bisnis,
            tgl_daftar: new Date,
            progress: 0,
          });
        }
        res.status(200).send({
          message: "Transaction status updated",
          data: transaction
        });
      } else {
        res.status(400).send({
          error:
            "Invalid value for 'status_transaksi'. Please provide a valid value.",
        });
      }
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },

  getTransaksiByIdUser: async (req, res) => {
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
      const result = await kelasTransaksiModel.findAll({
        where: {
          id_user: getuser.id,
        },
        include: [user, kelasBisnisModel],
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

  getCheckout: async (req, res) => {
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
  
      const id_kelas_bisnis = req.params.id_kelas_bisnis; 
      
      const result = await kelasTransaksiModel.findOne({
        where: {
          id_user: getuser.id,
          id_kelas_bisnis: id_kelas_bisnis,
        },
        include: [user, kelasBisnisModel],
      });
  
      if (!result) {
        throw new Error("DATA CHECKOUT TIDAK DITEMUKAN");
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
  

  getTransaksiByIdUserSuccess: async (req, res) => {
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
      const result = await kelasTransaksiModel.findAll({
        where: {
          id_user: getuser.id,
          status_transaksi: ["success"],
        },
        include: [
          {
            model: kelasBisnisModel,
            attributes: ["nama", "image", "harga", "images_link"],
          },
        ],
        attributes: [
          "id",
          "nomor_invoice",
          "date_transaksi",
          "status_transaksi",
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
  getTransaksiByIdUserPending: async (req, res) => {
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
      const result = await kelasTransaksiModel.findAll({
        where: {
          id_user: getuser.id,
          status_transaksi: ["pending"],
        },
        include: [
          {
            model: kelasBisnisModel,
            attributes: ["nama", "image", "harga", "images_link"],
          },
        ],
        attributes: [
          "id",
          "nomor_invoice",
          "date_transaksi",
          "status_transaksi",
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
  getTransaksiByIdUserCanceled: async (req, res) => {
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
      const result = await kelasTransaksiModel.findAll({
        where: {
          id_user: getuser.id,
          status_transaksi: ["canceled"],
        },
        include: [
          {
            model: kelasBisnisModel,
            attributes: ["nama", "image", "harga", "images_link"],
          },
        ],
        attributes: [
          "id",
          "nomor_invoice",
          "date_transaksi",
          "status_transaksi",
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

  getTransaksiInvoice: async (req, res) => {
    try {
      const userData = req.dataToken;
      const { id } = req.body;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });

      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }
      const result = await kelasTransaksiModel.findOne({
        where: {
          id_user: getuser.id,
          id: id,
        },
        attributes: [
          "id",
          "nomor_invoice",
          "date_transaksi",
          "status_transaksi",
        ],
        include: [
          {
            model: user,
            attributes: ["id", "nama_lengkap", "email"],
          },
          {
            model: kelasBisnisModel,
            attributes: ["id", "nama", "image", "harga", "images_link"],
          },
        ],
      });

      res.status(200).send({
        message: "successs",
        data: result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
