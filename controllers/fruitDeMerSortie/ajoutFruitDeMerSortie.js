const FruitDeMerSortie = require('../../models/fruitDeMerSortie');

const ajouterFruitDeMerSortie = async (req, res) => {
    try {
        const { nomFruitDeMer, quantite } = req.body;
        const fruitSortie = new FruitDeMerSortie({
            nomFruitDeMer,
            quantite
        });
        await fruitSortie.save();
        res.status(201).json(fruitSortie);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

module.exports = { ajouterFruitDeMerSortie };
