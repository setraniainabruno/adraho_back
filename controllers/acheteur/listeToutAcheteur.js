const Acheteur = require('../../models/acheteur');

const listeToutAcheteurs = async (req, res) => {
    try {
        const acheteurs = await Acheteur.find();
        res.status(200).json(acheteurs);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des acheteurs', error });
    }
};

module.exports = listeToutAcheteurs;