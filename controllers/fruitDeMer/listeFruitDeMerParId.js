const FruitDeMer = require("../../models/fruitDeMer");

const listeFruitDeMerParId = async (req, res) => {
    try {
        const { id } = req.params;
        const fruit = await FruitDeMer.findOne({ _id: id });
        if (!fruit) {
            return res.status(404).json({ message: 'Fruit de mer non trouvé' });
        }
        res.status(200).json(fruit);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { listeFruitDeMerParId };
