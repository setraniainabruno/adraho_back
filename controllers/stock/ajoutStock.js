const Stock = require("../../models/stock");

const ajouterStock = async (req, res) => {
    try {
        const { quantite, produitId } = req.body;

        if (!quantite || !produitId) {
            return res.status(400).json({ message: 'Quantité et produitId sont requis.' });
        }

        const nouveauStock = new Stock({ quantite, produitId });
        await nouveauStock.save();

        res.status(201).json({ nouveauStock });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = ajouterStock;
