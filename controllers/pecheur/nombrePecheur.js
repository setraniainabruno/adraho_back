const Pecheur = require('../../models/pecheur');

const nombrePecheurs = async (req, res) => {
    try {
        const total = await Pecheur.countDocuments();

        res.status(200).json({
            total,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Erreur lors de la récupération du nombre de pêcheurs',
            error: error.message,
        });
    }
};

module.exports = { nombrePecheurs };
