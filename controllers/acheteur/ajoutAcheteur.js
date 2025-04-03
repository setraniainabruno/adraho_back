const Acheteur = require('../../models/acheteur');

const ajouterAcheteur = async (req, res) => {
    try {
        const { nom, type, phone } = req.body;

        const photo = req.file ? `/images/${req.file.filename}` : '';

        const acheteur = new Acheteur({
            nom,
            type,
            phone,
            photo: photo || ''
        });
        const nouveauAcheteur = await acheteur.save();
        res.status(201).json(nouveauAcheteur);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de l\'acheteur', error });
    }
};

module.exports = ajouterAcheteur;