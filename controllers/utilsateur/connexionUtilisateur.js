const bcrypt = require('bcryptjs');
const Utilisateur = require('../../models/utilisateur');


const connexionUtilisateur = async (req, res) => {
    try {
        const { email, motDePasse } = req.body;

        const utilisateur = await Utilisateur.findOne({ email });

        if (!utilisateur) {
            return res.status(404).json({ message: 'Utilisateur non trouvé avec cet email', success: false, });
        }

        const isMatch = await bcrypt.compare(motDePasse, utilisateur.motDePasse);

        if (!isMatch) {
            return res.status(400).json({ message: 'Mot de passe incorrect', success: false, });
        }

        res.status(200).json({
            message: 'Connexion réussie',
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Erreur lors de la connexion',
            success: false,
            error: error.message,
        });
    }
};

module.exports = { connexionUtilisateur };
