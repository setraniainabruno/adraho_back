const FruitDeMerEntree = require("../../models/fruitDeMerEntree");

const listeFruitDeMerEntreeParId = async (req, res) => {
    try {
        const { id } = req.params;
        const fruitDeMerEntree = await FruitDeMerEntree.findOne({ _id: id });
        if (!fruitDeMerEntree) {
            return res.status(404).json({ message: 'Entrée de fruit de mer non trouvée' });
        }
        res.status(200).json(fruitDeMerEntree);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

module.exports = { listeFruitDeMerEntreeParId };
