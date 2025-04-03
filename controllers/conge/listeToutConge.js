const Conge = require("../../models/conge");

const listeToutConge = async (req, res) => {
    try {
        const conges = await Conge.find().populate('idEmploye');

        if (conges.length === 0) {
            return res.status(404).json({ message: 'Aucun congé trouvé' });
        }

        res.status(200).json({ conges });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = listeToutConge;
