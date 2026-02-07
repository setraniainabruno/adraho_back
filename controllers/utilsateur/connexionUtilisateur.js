const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Utilisateur = require('../../models/utilisateur');

// Générer un token JWT
const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET || 'votre_secret_jwt', // Utilisez une variable d'environnement en production
        { expiresIn: process.env.JWT_EXPIRE || '30d' }
    );
};

const connexionUtilisateur = async (req, res) => {
    try {
        const { email, motDePasse } = req.body;

        // Validation des champs obligatoires
        if (!email || !motDePasse) {
            return res.status(400).json({ 
                message: 'Veuillez fournir un email et un mot de passe', 
                success: false 
            });
        }

        // Recherche de l'utilisateur
        const utilisateur = await Utilisateur.findOne({ email });

        if (!utilisateur) {
            return res.status(404).json({ 
                message: 'Utilisateur non trouvé avec cet email', 
                success: false 
            });
        }

        // Vérification du mot de passe
        const isMatch = await bcrypt.compare(motDePasse, utilisateur.motDePasse);

        if (!isMatch) {
            return res.status(401).json({ 
                message: 'Mot de passe incorrect', 
                success: false 
            });
        }

        // Génération du token JWT
        const token = generateToken(utilisateur._id);

        // Exclure le mot de passe de la réponse
        const utilisateurSansMotDePasse = {
            _id: utilisateur._id,
            email: utilisateur.email,
            nom: utilisateur.nom,
            prenom: utilisateur.prenom,
            role: utilisateur.role,
            dateCreation: utilisateur.dateCreation,
            // Ajoutez d'autres champs selon votre modèle
        };

        console.log('Connexion réussie');
        res.status(200).json({
            message: 'Connexion réussie',
            success: true,
            token: token,
            utilisateur: utilisateurSansMotDePasse
        });

    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        res.status(500).json({
            message: 'Erreur lors de la connexion',
            success: false,
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
};

module.exports = { connexionUtilisateur };