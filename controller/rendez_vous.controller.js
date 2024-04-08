const Rendez_vous_Model = require('../models/rendez-vous');

const ajout_rendez_vous = async (req, res) => {
   const id_visiteur = req.params.id;
   const id_rendez_vous = req.body.id_rendez_vous;

   try {
      const rendezvous = await Rendez_vous_Model.findByPk(id_rendez_vous);

      if (rendezvous !== null) {
         rendezvous.id_visiteur = id_visiteur;
         await rendezvous.save();

         return res.status(200).json({ message: "Rendez-vous mis à jour avec succès." });
      } else {
         return res.status(404).json({ message: "Rendez-vous non trouvé." });
      }
   } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erreur serveur lors de la mise à jour du rendez-vous." });
   }
};

module.exports = { ajout_rendez_vous };
