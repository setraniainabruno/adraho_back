const FruitDeMerEntree = require("../../models/fruitDeMerEntree");

const ajouterFruitDeMerEntree = async (req, res) => {
    try {
        const { matriculePecheur, idFruitDeMer, prixUnitaire, quantite } = req.body;
        const montant = prixUnitaire * quantite;
        const fruitDeMerEntree = new FruitDeMerEntree({
            matriculePecheur,
            idFruitDeMer,
            prixUnitaire,
            quantite,
            montant
        });
        await fruitDeMerEntree.save();
        res.status(201).json(fruitDeMerEntree);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

module.exports = { ajouterFruitDeMerEntree };
