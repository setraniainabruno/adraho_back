const Pointage = require("../../models/pointage");

const listePointageParId = async (req, res) => {
    try {
        const { id } = req.params;
        const pointage = await Pointage.findById(id).populate("idEmploye");
        if (!pointage) {
            return res.status(404).json({ message: "Pointage non trouvé." });
        }

        res.status(200).json({ pointage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = listePointageParId;