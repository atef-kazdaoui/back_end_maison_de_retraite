const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const VisiteurModel = sequelize.define('Visiteur',
    {
        id_visiteur: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nom_visiteur: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        prenom_visiteur: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
        age_visiteur: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        presentation_visiteur: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        
        pseudo:{
            type:DataTypes.CHAR,
            allowNull:false,

        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        }

    });
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




module.exports = VisiteurModel;