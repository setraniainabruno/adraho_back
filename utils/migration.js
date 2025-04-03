const Acheteur = require("../models/acheteur");
const FruitDeMer = require("../models/fruitDeMer");
const FruitDeMerEntree = require("../models/fruitDeMerEntree");
const FruitDeMerSortie = require("../models/FruitDeMerSortie");
const Pecheur = require("../models/pecheur");
const Utilisateur = require("../models/utilisateur");
const Produit = require("../models/produit");
const Stock = require("../models/stock");
const Employe = require('../models/employe');
const Pointage = require('../models/pointage');
const Reunion = require('../models/reunion');
const Activite = require('../models/activite');

const migrationSchema = async () => {
    try {
        await Acheteur.countDocuments();
        await FruitDeMer.countDocuments();
        await FruitDeMerEntree.countDocuments();
        await FruitDeMerSortie.countDocuments();
        await Pecheur.countDocuments();
        await Utilisateur.countDocuments();
        await Produit.countDocuments();
        await Stock.countDocuments();
        await Employe.countDocuments();
        await Pointage.countDocuments();
        await Reunion.countDocuments();
        await Activite.countDocuments();
    } catch (error) {
        console.error(error);
    }
};

module.exports = { migrationSchema }