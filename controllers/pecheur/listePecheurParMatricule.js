const Pecheur = require('../../models/pecheur');


const listePecheurParMatricule = async (req, res) => {
    try {
        const { matricule } = req.params;

        const fruit = await Pecheur.findOne({ matricule: matricule });
        if (!fruit) {
            return res.status(404).json({ message: 'Pecheur de mer non trouvé' });
        }
        res.status(200).json(fruit);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { listePecheurParMatricule };
