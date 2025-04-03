const bcrypt = require('bcryptjs');
const Utilisateur = require('../../models/utilisateur');


const ajouterUtilisateur = async (req, res) => {
    try {
        const { nom, prenom, email, motDePasse, role } = req.body;

        const motDePasseCrypte = await bcrypt.hash(motDePasse, 10);

        const photo = req.file ? `/images/${req.file.filename}` : '';

        const utilisateur = new Utilisateur({
            nom,
            prenom,
            email,
            motDePasse: motDePasseCrypte,
            photo: photo || '',
            role: role || 'utilisateur'
        });
        const result = await utilisateur.save();

        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({
            message: 'Erreur lors de l\'ajout de l\'utilisateur',
            error: error.message,
        });
    }
};

module.exports = { ajouterUtilisateur };
