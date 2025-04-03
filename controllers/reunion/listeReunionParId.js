const Reunion = require("../../models/reunion");

const listeReunionParId = async (req, res) => {
    try {
        const { id } = req.params;
        const reunion = await Reunion.findById(id);
        if (!reunion) {
            return res.status(404).json({ message: 'Réunion non trouvée' });
        }
        res.status(200).json({ reunion });
    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = listeReunionParId;