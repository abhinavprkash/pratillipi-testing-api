const express = require('express');
const { mainFunction, indexFunction } = require('../controller/main.controller');
const { populateFunction } = require('../controller/populate.controller');
const { uploadFunction } = require('../controller/upload.controller');
const multer = require("multer");
const { multerFilter, multerStorage } = require('../config/multer.config');

const router = express.Router();

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
  });

// Define your API endpoints below

router.get("/hi", mainFunction);

router.get('/test', populateFunction);

router.get('/index', indexFunction);

router.post('/uploadFile', upload.single("myFile"), uploadFunction);

module.exports = router;