const express = require('express');
const router = express.Router();
const TrackingUrlController = require("../controllers/TrackingUrl.controller.js");

router.get("/:hash", TrackingUrlController.findByHash);

module.exports = router;
