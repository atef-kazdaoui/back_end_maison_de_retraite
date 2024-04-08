const express = require("express");
const router = express.Router();
const rendezvous=require('../controller/rendez_vous.controller');
router.post('/ajouter/:id',rendezvous.ajout_rendez_vous);



module.exports = router;