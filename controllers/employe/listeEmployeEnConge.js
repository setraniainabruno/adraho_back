const Employe = require("../../models/employe");

const listeEmployesEnConge = async (req, res) => {
    try {
        const employesEnConge = await Employe.find({ statut: /congé/i });

        if (employesEnConge.length === 0) {
            return res.status(404).json({ message: 'Aucun employé en congé' });
        }

        res.status(200).json({ employesEnConge });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = listeEmployesEnConge;
