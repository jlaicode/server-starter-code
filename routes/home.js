/*==================================================
/routes/home.js

It is a Home page used to test application hosting.
==================================================*/
const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

module.exports = router;