const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const PassionModel = require('./passion'); // Importez le modèle Passion

const ResidentModel = sequelize.define(
  'Resident',
  {
    id_resident: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom_resident: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    prenom_resident: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    age_resident: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    presentation: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {}
);
/**
 *  (async () => {
    try {
      await sequelize.authenticate();
      console.log('Connexion à la base de données réussie.');
  
      await sequelize.sync({ force: true });
      console.log('La synchronisation de la base de données a été effectuée avec succès.');
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'initialisation de la base de données:", error);
    }
  })();
 

 * 
 * 
 */
 
// Définissez la relation avec le modèle Passion
ResidentModel.belongsToMany(PassionModel, { through: 'ResidentPassion', onDelete: 'CASCADE' });

module.exports = ResidentModel;
