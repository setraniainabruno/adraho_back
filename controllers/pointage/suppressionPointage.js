const Pointage = require("../../models/pointage");

const supprimerPointage = async (req, res) => {
    try {
        const { id } = req.params;
        const pointage = await Pointage.findByIdAndDelete(id);
        if (!pointage) {
            return res.status(404).json({ message: "Pointage non trouvé." });
        }
        res.status(200).json({ message: "Pointage supprimé avec succès." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = supprimerPointage;