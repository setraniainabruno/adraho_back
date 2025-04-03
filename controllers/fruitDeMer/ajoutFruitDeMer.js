const FruitDeMer = require("../../models/fruitDeMer");

const ajouterFruitDeMer = async (req, res) => {
    try {
        const { nom, prixUnitaire, type, qualite } = req.body;
        const photo = req.file ? req.file.path : "";
        const fruit = new FruitDeMer({
            nom,
            photo,
            prixUnitaire,
            type,
            qualite
        });
        await fruit.save();
        res.status(201).json(fruit);
    } catch (err) {
        res.status(400).json({ message: 'Error creating fruit de mer', error: err });
    }
};

module.exports = { ajouterFruitDeMer };