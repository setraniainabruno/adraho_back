const FruitDeMerSortie = require("../../models/fruitDeMerSortie");

const supprimerFruitDeMerSortie = async (req, res) => {
    const { id } = req.params;
    try {
        const fruit = await FruitDeMerSortie.findByIdAndDelete(id);
        if (!fruit) {
            return res.status(404).json({ message: 'Fruit de mer sortie non trouvé' });
        }
        res.status(200).json({ message: 'Fruit de mer sortie supprimé avec succès' });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

module.exports = { supprimerFruitDeMerSortie };
