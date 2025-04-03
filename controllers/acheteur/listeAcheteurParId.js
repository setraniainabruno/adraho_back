const Acheteur = require('../../models/acheteur');


const listeAcheteurParId = async (req, res) => {
    const { id } = req.params;
    try {
        const acheteur = await Acheteur.findById(id);
        if (!acheteur) {
            return res.status(404).json({ message: 'Acheteur non trouvé' });
        }
        res.status(200).json(acheteur);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'acheteur', error });
    }
};

module.exports = listeAcheteurParId;