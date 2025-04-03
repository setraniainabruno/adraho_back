const Produit = require('../../models/produit');

const ajouterProduit = async (req, res) => {
    try {
        const { nom, type, prix, format } = req.body;

        const photo = req.file ? `/images/${req.file.filename}` : '';

        const produit = new Produit({
            nom,
            type,
            prix,
            format,
            photo: photo || ''
        });
        const nouveauProduit = await produit.save();
        res.status(201).json(nouveauProduit);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création du produit', error });
    }
};

module.exports = ajouterProduit;