const express = require("express");
require("dotenv").config();
const db = require("./models");
const cors = require("cors");
const { join } = require("path");
const { URL, URLSearchParams } = require("url");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, "images")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  try {
    res.status(200).send({
      message: "this is my api",
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

const { loginRouters } = require("./routers");
const { userRouters } = require("./routers");
const { artikelRouters } = require("./routers");
const { lowonganRouters } = require("./routers");
const { kelasBisnisRouters } = require("./routers");
const { userKelasRouters } = require("./routers");
const { kelasWishlistRouters } = require("./routers");
const { testingRouter } = require("./routers");
const { kelasTransaksiRouters } = require("./routers");
const { cmsAuthRouters } = require("./routers");
const { authorize } = require("./middleware/validator");

app.use("/api/cms", cmsAuthRouters);
app.use("/api", authorize);
app.use("/api/auth", loginRouters);
app.use("/api/user", userRouters);
app.use("/api/userKelas", userKelasRouters);
app.use("/api/artikel", artikelRouters);
app.use("/api/lowongan", lowonganRouters);
app.use("/api/kelasBisnis", kelasBisnisRouters);
app.use("/api/kelasWishlist", kelasWishlistRouters);
app.use("/api/testing", testingRouter);
app.use("/api/kelasTransaksi", kelasTransaksiRouters);

app.use("/images", express.static("images"));

app.listen(process.env.PORT, () => {
  // db.sequelize.sync({ alter: true });
  console.log(`server is running on port ${process.env.PORT}`);
});
