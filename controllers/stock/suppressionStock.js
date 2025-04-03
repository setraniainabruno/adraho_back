const Stock = require("../../models/stock");

const supprimerStock = async (req, res) => {
    try {
        const { id } = req.params;
        const stock = await Stock.findByIdAndDelete(id);

        if (!stock) {
            return res.status(404).json({ message: 'Stock non trouvé.' });
        }

        res.status(200).json({ message: 'Stock supprimé avec succès.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = supprimerStock;
