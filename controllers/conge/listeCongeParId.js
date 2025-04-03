const Conge = require("../../models/conge");

const listeCongeParId = async (req, res) => {
    try {
        const { id } = req.params;
        const conge = await Conge.findById(id).populate('idEmploye');

        if (!conge) {
            return res.status(404).json({ message: 'Conge non trouvé avec cet ID' });
        }
        res.status(200).json({ conge });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = listeCongeParId;
