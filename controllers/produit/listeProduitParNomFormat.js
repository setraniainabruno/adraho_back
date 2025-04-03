const Produit = require("../../models/produit");

const getProduitsByNomAndFormat = async (req, res) => {
    try {
        const { nom, format } = req.query;
        if (!nom || !format) {
            return res.status(400).json({ message: 'Les paramètres nom et format sont requis.' });
        }

        const produits = await Produit.find({
            nom: new RegExp(nom, 'i'),
            format: new RegExp(format, 'i')
        });
        if (produits.length === 0) {
            return res.status(404).json({ message: 'Aucun produit trouvé avec ces critères.' });
        }
        res.status(200).json({ produits });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getProduitsByNomAndFormat;
