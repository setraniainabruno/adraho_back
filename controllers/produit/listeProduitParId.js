const Produit = require('../../models/produit');

const listeProduitParId = async (req, res) => {
    const { id } = req.params;
    try {
        const produit = await Produit.findById(id);
        if (!produit) {
            return res.satus(404).json({ message: 'Produit non trouvé' });
        }
        res.status(200).json(produit);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récuperation du produit', error });
    }
};

module.exports = listeProduitParId;