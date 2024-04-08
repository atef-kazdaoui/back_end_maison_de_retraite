const express = require("express");
const router = express.Router();
const inscription= require('../controller/inscription.resident.controller')

router.post("/inscription",inscription.inscription_resident)

module.exports = router;