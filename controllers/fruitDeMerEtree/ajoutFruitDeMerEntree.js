const FruitDeMerEntree = require("../../models/fruitDeMerEntree");

const ajouterFruitDeMerEntree = async (req, res) => {
    try {
        const { matriculePecheur, nomFruitDeMer, prixUnitaire, quantite } = req.body;
        const montant = prixUnitaire * quantite;
        const fruitDeMerEntree = new FruitDeMerEntree({
            matriculePecheur,
            nomFruitDeMer,
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
