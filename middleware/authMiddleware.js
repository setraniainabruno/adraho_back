// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const protegerRoute = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Récupérer le token du header
            token = req.headers.authorization.split(' ')[1];
            
            // Vérifier le token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            // Ajouter l'utilisateur à la requête
            req.utilisateur = await Utilisateur.findById(decoded.id).select('-motDePasse');
            
            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({ 
                message: 'Non autorisé, token invalide', 
                success: false 
            });
        }
    }

    if (!token) {
        res.status(401).json({ 
            message: 'Non autorisé, aucun token fourni', 
            success: false 
        });
    }
};

module.exports = { protegerRoute };