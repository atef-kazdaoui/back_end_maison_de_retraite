const VisiteurModel = require('../models/visiteur');
const bcrypt = require('bcrypt');

const inscription_visiteur = async (req, res) => {
  try {
    const { nom_visiteur, prenom_visiteur, age_visiteur, presentation_visiteur, pseudo, password } = req.body;

    // Utilisez bcrypt pour hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Enregistrez le visiteur avec le mot de passe haché
    await VisiteurModel.create({
      nom_visiteur,
      prenom_visiteur,
      age_visiteur,
      presentation_visiteur,
      pseudo,
      password: hashedPassword, // Enregistrez le mot de passe haché dans la base de données
    });

    res.status(200).send('Inscription terminée');
  } catch (error) {
    console.error("Erreur lors de l'inscription du visiteur:", error);
    res.status(500).send('Erreur lors de l\'inscription du visiteur');
  }
};

module.exports = { inscription_visiteur };
