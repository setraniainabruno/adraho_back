const Produit = require('../../models/produit');

const listeToutProduit = async (req, res) => {
    try {
        const produits = await Produit.find();
        res.status(200).json(produits);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la recuperation des produits',err });
    }
};

module.exports = listeToutProduit;