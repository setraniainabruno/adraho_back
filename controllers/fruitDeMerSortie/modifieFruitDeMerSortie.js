const FruitDeMerSortie = require("../../models/fruitDeMerSortie");

const modifierFruitDeMerSortie = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const fruit = await FruitDeMerSortie.findById(id);
        if (!fruit) {
            return res.status(404).json({ message: 'Fruit de mer sortie non trouvé' });
        }
        const fruitMisAJour = await FruitDeMerSortie.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json(fruitMisAJour);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

module.exports = { modifierFruitDeMerSortie };
