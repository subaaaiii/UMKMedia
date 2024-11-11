const db = require("../models");
const user = db.User;
const userPribadi = db.user_pribadi;
const role = db.Role;
const bcrypt = require("bcrypt");
const utility = require("./utility");
const webToken = require("jsonwebtoken");
const nodemailer = require("../lib/nodemailer/nodemailer");
const dotenv = require("dotenv");
const fs = require("fs");
const handlebars = require("handlebars");
dotenv.config();

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password, uid_firebase, display_name } = req.body;
      if (uid_firebase) {
        console.log({ uid: uid_firebase, display_name });
        const uidGoogleIsExist = await user.findOne({
          where: { uid_firebase },
        });

        if (uidGoogleIsExist) {
          console.log({ email: uidGoogleIsExist.email });
          const jwt = utility.makeJWT(uidGoogleIsExist);
          res.status(200).send({
            message: "succes",
            data: uidGoogleIsExist,
            token: jwt,
          });
        } else {
          const nama_depan = display_name.split(" ")[0];
          const nama_belakang = display_name.split(" ")[1];
          console.log({ nama_depan });
          const creatUser = await user.create({
            nama_lengkap: display_name,
            uid_firebase,
            email,
            id_role: 3,
            profile_picture: "chibi2.jpg",
            nama_depan,
            verified: true,
            nama_belakang: nama_belakang || "",
            username: nama_depan.toLowerCase() + Date.now(),
          });

          if (!creatUser) throw new Error("Failed to create user");

          const createDataPribadi = await userPribadi.create({
            no_wa: "",
            jenis_kelamin: "",
            tempat_lahir: "",
            tanggal_lahir: null,
            alamat: "",
            provinsi: "",
            kota_kabupaten: "",
            kode_pos: "",
            link_ig: "",
            link_fb: "",
            link_linkedid: "",
            id_user: creatUser.id,
          });

          const jwt = utility.makeJWT(creatUser);
          res.status(200).send({
            message: "succes",
            data: creatUser,
            token: jwt,
          });
        }
      } else {
        const existingUser = await user.findOne({
          where: { email },
        });

        if (!existingUser) {
          return res.status(404).json({ error: "User not found" });
        }
        console.log(password);
        console.log(existingUser.password);

        const passwordMatch = await bcrypt.compare(
          password,
          existingUser.password
        );

        if (!passwordMatch) {
          return res.status(401).json({ error: "Invalid password" });
        }

        const jwt = utility.makeJWT(existingUser);
        res.status(200).json({
          message: "Login successful",
          user: existingUser,
          token: jwt,
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  register: async (req, res) => {
    const t = await db.sequelize.transaction();
    const { nama_lengkap, username, no_hp, email, password, konfirm_password } =
      req.body;

    //kofirmasi password
    if (konfirm_password !== password)
      return utility.createResponse(res, 400, false, "Password tidak sama");
    //checking structure email
    if (!utility.validateEmail(email))
      return utility.createResponse(res, 400, false, "Email Tidak Valid");
    //available username
    if (!(await utility.checkAvailableColumn2(user, "username", username)))
      return utility.createResponse(
        res,
        400,
        false,
        "username sudah digunakan"
      );
    //available email
    if (!(await utility.checkAvailableColumn2(user, "email", email)))
      return utility.createResponse(res, 400, false, "email sudah digunakan");
    //available no hp
    if (!(await utility.checkAvailableColumn2(user, "no_hp", no_hp)))
      return utility.createResponse(
        res,
        400,
        false,
        "nomor hp sudah digunakan"
      );

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const newUser = await user.create(
        {
          nama_lengkap: nama_lengkap,
          username: username,
          password: hashedPassword,
          email: email,
          no_hp: no_hp,
          id_role: 3,
          profile_picture: "chibi2.jpg",
        },
        {
          transaction: t,
        }
      );
      if (!newUser) throw new Error("failed to register");
      const createDataPribadi = await userPribadi.create(
        {
          no_wa: "",
          jenis_kelamin: "",
          tempat_lahir: "",
          tanggal_lahir: null,
          alamat: "",
          provinsi: "",
          kota_kabupaten: "",
          kode_pos: "",
          link_ig: "",
          link_fb: "",
          link_linkedid: "",
          id_user: newUser.id,
        },
        {
          transaction: t,
        }
      );
      const payload = {
        email: newUser.email,
        id_role: newUser.id_role,
      };
      const result = webToken.sign(payload, process.env.SECRET_JWT, {
        algorithm: "HS256",
        expiresIn: "1m",
        issuer: "Growlab",
      });
      // const jwt = utility.makeJWT(getUser);

      const verificationLink = `${process.env.CLIENT_BASE_URL}/verifikasi/${result}`;
      const tempEmail = fs.readFileSync(
        require.resolve("../template/verifikasi.html"),
        { encoding: "utf8" }
      );
      const tempCompile = handlebars.compile(tempEmail);
      const tempResult = tempCompile({ verificationLink });
      let mail = {
        from: `Admin <zainurrouf4@gmail.com>`,
        to: `${email}`,
        subject: ` verifikasi akun growlab`,
        // html: `<a href="${resetLink}">${resetLink}</a>`,
        html: tempResult,
      };
      let response = nodemailer.sendMail(mail);
      const jwt = utility.makeJWT(newUser);
      const data = {
        newUser,
        jwt,
      };
      await t.commit();
      return utility.createResponse(res, 201, true, "Pendaftaran Sukses", data);
    } catch (error) {
      await t.rollback();
      return utility.createResponse(res, 500, false, error.message);
    }
  },
};
