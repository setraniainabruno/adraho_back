const Activite = require("../../models/activite");

const supprimerActivite = async (req, res) => {
    try {
        const { id } = req.params;
        const activite = await Activite.findByIdAndDelete(id);
        if (!activite) {
            return res.status(404).json({ message: 'Activité non trouvée' });
        }
        res.status(200).json({ message: 'Activité supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = supprimerActivite;