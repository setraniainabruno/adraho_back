const Pecheur = require('../../models/pecheur');

const listeToutPecheurs = async (req, res) => {
    try {
        const pecheurs = await Pecheur.find();

        res.status(200).json({
            pecheurs,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Erreur lors de la récupération des pêcheurs',
            error: error.message,
        });
    }
};

module.exports = { listeToutPecheurs };
