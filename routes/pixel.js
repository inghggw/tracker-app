const express = require('express');
const router = express.Router();
const TrackingPixelController = require("../controllers/TrackingPixel.controller.js");

router.get("/:hash", TrackingPixelController.findByHash);

module.exports = router;
