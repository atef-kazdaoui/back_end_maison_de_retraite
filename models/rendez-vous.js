const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Visiteur = require('./visiteur');

const Rendez_vous_Model = sequelize.define(
    'Rendez-vous',
    {
      id_rendez_vous: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date_disponible: {
        type: DataTypes.DATE,
      },
      id_visiteur: {
        type: DataTypes.INTEGER,
        defaultValue: null,
        references: {
          model: Visiteur,
          key: 'id_visiteur',
          onDelete: 'SET NULL', // Suppression en cascade
        },
      },
    },
    {}
  );


// Définition de l'association
Rendez_vous_Model.belongsTo(Visiteur, { foreignKey: 'id_visiteur' });

module.exports = Rendez_vous_Model;
