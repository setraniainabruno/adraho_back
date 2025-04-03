const FruitDeMerEntree = require("../../models/fruitDeMerEntree");

const modifierFruitDeMerEntree = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        if (updatedData.prixUnitaire && updatedData.quantite) {
            updatedData.montant = updatedData.prixUnitaire * updatedData.quantite;
        }
        const updatedFruitDeMerEntree = await FruitDeMerEntree.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedFruitDeMerEntree) {
            return res.status(404).json({ message: 'Entrée de fruit de mer non trouvée' });
        }
        res.status(200).json(updatedFruitDeMerEntree);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

module.exports = { modifierFruitDeMerEntree };
