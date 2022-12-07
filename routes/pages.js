const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('index')
})

router.get("/login", (req, res) => {
  res.render("index");
});

router.get("/home", (req, res) => {
  res.render("index");
});