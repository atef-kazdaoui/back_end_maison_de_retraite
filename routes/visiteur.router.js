const express = require("express");
const router = express.Router();
const inscription_visiteur = require('../controller/inscription.visiteur.controller');
const connexion_visiteur=require('../controller/connexion.visiteur.controller');

router.post("/inscription",inscription_visiteur.inscription_visiteur);
router.get('/connexion',connexion_visiteur.connexion_visiteur);

module.exports = router;