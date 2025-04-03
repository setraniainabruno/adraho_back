const Utilisateur = require("../../models/utilisateur");

const listeToutUtilisateurs = async (req, res) => {
    try {
        const utilisateurs = await Utilisateur.find();
        res.status(200).json(utilisateurs);
    } catch (err) {
        res.status(500).json({ message: "Erreur lors de la récupération", error: err.message });
    }
};

module.exports = { listeToutUtilisateurs }