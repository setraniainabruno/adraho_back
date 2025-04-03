const FruitDeMerEntree = require('../../models/fruitDeMerEntree');

const listeToutFruitDeMerEntree = async (req, res) => {
    try {
        const fruits = await FruitDeMerEntree.find();
        res.status(200).json(fruits);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

module.exports = { listeToutFruitDeMerEntree };
