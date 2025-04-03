const Reunion = require("../../models/reunion");

const supprimerReunion = async (req, res) => {
    try {
        const { id } = req.params;
        const reunion = await Reunion.findByIdAndDelete(id);
        if (!reunion) {
            return res.status(404).json({ message: 'Réunion non trouvée' });
        }
        res.status(200).json({ message: 'Réunion supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = supprimerReunion;