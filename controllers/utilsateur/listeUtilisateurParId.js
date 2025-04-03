const Utilisateur = require("../../models/utilisateur");

const listeUtilisateurParId = async (req, res) => {
    try {
        const { id } = req.params;
        const utilisateur = await Utilisateur.findOne({ _id: id });
        if (!utilisateur) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
        res.status(200).json(utilisateur);
    } catch (err) {
        res.status(500).json({ message: "Erreur lors de la récupération", error: err.message });
    }
};

module.exports = { listeUtilisateurParId }