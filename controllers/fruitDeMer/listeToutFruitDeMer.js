const FruitDeMer = require("../../models/fruitDeMer");

const listeToutFruiDeMer = async (req, res) => {
    try {
        const fruitDeMer = await FruitDeMer.find();
        res.status(200).json(fruitDeMer);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving fruits de mer', error: err });
    }
};

module.exports = { listeToutFruiDeMer }