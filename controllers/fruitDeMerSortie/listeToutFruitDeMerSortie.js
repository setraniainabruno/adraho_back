const FruitDeMerSortie = require("../../models/fruitDeMerSortie");

const listeToutFruitsDeMerSortie = async (req, res) => {
    try {
        const fruits = await FruitDeMerSortie.find();
        res.status(200).json(fruits);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

module.exports = { listeToutFruitsDeMerSortie };
