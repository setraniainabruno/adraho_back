const Stock = require("../../models/stock");

const modifierStock = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const stock = await Stock.findByIdAndUpdate(id, updateData, { new: true });

        if (!stock) {
            return res.status(404).json({ message: 'Stock non trouvé.' });
        }
        res.status(200).json({ message: 'Stock mis à jour avec succès.', stock });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = modifierStock;
