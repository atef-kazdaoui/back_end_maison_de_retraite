const VisiteurModel = require('../models/visiteur');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const connexion_visiteur =async (req,res)=>{

try{
    VisiteurModel.findOne({where:{pseudo:req.body.pseudo}}).then(visiteur=>{
     if(!visiteur){
        res.status(400).json({message:"ce pseudo n'existe pas veuillez s'inscrire "})
     }else{
        bcrypt.compare(req.body.password,visiteur.password).then(same=>{
            if(same){
                let token=jwt.sign({id:visiteur.id_visiteur,nom:visiteur.nom_visiteur},process.env.PRIVATE_KEY,{expiresIn:"1h"})
                res.status(200).json({token:token , message:"bienvenue "+visiteur.nom_visiteur})
            }else{
                res.status(400).json({message:"erreur "})
            }
        })
     }
   


    })

}
catch(e){
    return res.status(401).json({ error: e.message });

}
}
module.exports = {connexion_visiteur};