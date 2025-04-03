const FruitDeMerSortie = require("../../models/fruitDeMerSortie");

const listeFruitDeMerSortieParId = async (req, res) => {
    const { id } = req.params;
    try {
        const fruit = await FruitDeMerSortie.findOne({ _id: id });
        if (!fruit) {
            return res.status(404).json({ message: 'Fruit de mer sortie non trouvé' });
        }
        res.status(200).json(fruit);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

module.exports = { listeFruitDeMerSortieParId };
