const Employe = require('../../models/employe');

const listeEmployeParId = async (req, res) => {
    try {
        const { id } = req.params;

        const employe = await Employe.findById(id);

        if (!employe) {
            return res.status(404).json({ message: 'Employé non trouvé' });
        }

        res.status(200).json({ employe });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = listeEmployeParId;
