const Stock = require("../../models/stock");

const listeStockParId = async (req, res) => {
    try {
        const { id } = req.params;
        const stock = await Stock.findById(id).populate('produitId');

        if (!stock) {
            return res.status(404).json({ message: 'Stock non trouvé.' });
        }
        res.status(200).json({ stock });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = listeStockParId;
