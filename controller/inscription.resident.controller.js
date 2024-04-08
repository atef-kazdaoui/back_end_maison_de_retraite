const Residentmodel = require('../models/Resident');

const inscription_resident = async (req, res) => {
  try {
    await Residentmodel.create({
      nom_resident: req.body.nom,
      prenom_resident: req.body.prenom,
      age_resident: req.body.age,
      presentation: req.body.description
    });

    res.status(200).send("Inscription terminée");
  } catch (error) {
    console.error("Erreur lors de l'inscription du résident:", error);
    res.status(500).send("Une erreur s'est produite lors de l'inscription.");
  }
};

module.exports = {
  inscription_resident
};
