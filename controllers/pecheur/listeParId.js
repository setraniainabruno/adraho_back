const Pecheur = require('../../models/pecheur');


const listePecheurParId = async (req, res) => {
    try {
        const { id } = req.params;

        const fruit = await Pecheur.findOne({ _id: id });
        if (!fruit) {
            return res.status(404).json({ message: 'Pecheur de mer non trouvé' });
        }
        res.status(200).json(fruit);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

module.exports = { listePecheurParId };
