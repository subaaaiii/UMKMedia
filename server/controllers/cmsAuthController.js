const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
require("dotenv").config();
const auth = db.cms_auth;
const { Role } = require("../models");

module.exports = {
  loginUser: async (req, res) => {
    try {
      const { username, password } = req.body;
      const userFind = await auth.findOne({
        where: {
          username,
        },
      });

      const passwordMatch = await bcrypt.compare(password, userFind.password);
      if (!passwordMatch) {
        return res
          .status(400)
          .json({ status: "Failed", error: "Invalid password!" });
      }

      const token = jwt.sign(
        { id: userFind.id, roleId: userFind.roleId },
        process.env.SECRET_JWT,
        {
          algorithm: "HS256",
          expiresIn: "1h",
        }
      );

      res.status(200).json({
        status: "Successfully",
        message: "Login Success!",
        token: token,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  createUser: async (req, res) => {
    const { username, password, roleId, access } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    auth
      .create({
        username: username,
        password: hashedPassword,
        roleId: roleId,
        access: access,
      })
      .then(() => {
        res.status(201).json({
          status: "Created",
          message: "Account Created!",
        });
      })
      .catch((err) => console.log(err.message));
  },

  myUser: async (req, res) => {
    const currentUser = await auth.findByPk(admin.id);
    const roleData = await Role.findByPk(currentUser.roleId);
    const access = currentUser.access.split(" ");

    if (currentUser) {
      return res.status(200).json({
        status: "Success",
        data: {
          id: currentUser.id,
          username: currentUser.username,
          roleName: roleData.nama_role,
          access: access,
        },
      });
    }

    return res.status(404).json({
      status: "Not Found",
      message: "User not found!",
    });
  },

  getOneUser: async (req, res) => {
    const { id } = req.params;
    const user = await auth.findByPk(id);

    return res.status(200).json({
      message: "Success!",
      data: {
        username: user.username,
        roleId: user.roleId,
        access: user.access,
      },
    });
  },

  getAllUser: async (req, res) => {
    const users = await auth.findAll();
    const newData = users.map((user) => {
      return {
        id: user.id,
        username: user.username,
        roleId: user.roleId,
        access: user.access,
      };
    });

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: newData,
    });
  },

  updateUser: async (req, res) => {
    const { username, password, roleId, access } = req.body;
    const { id } = req.params;
  
    const updateFields = {};
  
    // Memasukkan field yang ingin di-update jika ada isinya
    if (username) updateFields.username = username;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateFields.password = hashedPassword;
    }
    if (roleId) updateFields.roleId = roleId;
    if (access) updateFields.access = access;
  
    // Mengecek apakah ada field yang ingin di-update
    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({
        message: "No fields to update",
      });
    }
  
    // Melakukan update pada database
    const updateUser = await auth.update(updateFields, {
      where: { id },
    });
  
    return res.status(200).json({
      message: "User Updated!",
      data: updateUser,
    });
  },
  

  deleteUser: async (req, res) => {
    const { id } = req.params;

    const deleteUser = await auth.destroy({ where: { id: id } });

    return res.status(200).json({
      message: "User Deleted!",
      data: deleteUser,
    });
  },

  demoAuth: (req, res) => {
    res.send("Bisa Akses");
  },
};
