const FruitDeMerEntree = require("../../models/fruitDeMerEntree");

const supprimerFruitDeMerEntree = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFruitDeMerEntree = await FruitDeMerEntree.findByIdAndDelete(id);
        if (!deletedFruitDeMerEntree) {
            return res.status(404).json({ message: 'Entrée de fruit de mer non trouvée' });
        }
        res.status(200).json({ message: 'Entrée de fruit de mer supprimée avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression', error: err });
    }
};

module.exports = { supprimerFruitDeMerEntree };
