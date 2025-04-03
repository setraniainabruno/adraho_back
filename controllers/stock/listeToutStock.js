const Stock = require("../../models/stock");

const listeToutStock = async (req, res) => {
    try {
        const stocks = await Stock.find().populate('produitId');

        res.status(200).json({ stocks });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = listeToutStock;
