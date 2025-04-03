const Activite = require("../../models/activite");

const listeActiviteParId = async (req, res) => {
    try {
        const { id } = req.params;
        const activite = await Activite.findById(id);
        if (!activite) {
            return res.status(404).json({ message: 'Activité non trouvée' });
        }
        res.status(200).json({ activite });
    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = listeActiviteParId;