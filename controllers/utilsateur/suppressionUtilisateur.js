const fs = require('fs');
const path = require('path');
const Utilisateur = require('../../models/utilisateur');

const supprimerUtilisateur = async (req, res) => {
    try {
        const { id } = req.params;
        const utilisateur = await Utilisateur.findOne({ _id: id });

        if (!utilisateur) {
            return res.status(404).json({ message: 'Utilisateur non trouvé avec cet ID' });
        }
        if (utilisateur.photo) {
            const imagePath = path.join(__dirname, '..', '..', 'public', utilisateur.photo);
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error(err.message);
                }
            });
        }

        await Utilisateur.findByIdAndDelete(id);

        res.status(200).json({
            message: 'Utilisateur et sa photo supprimés avec succès',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { supprimerUtilisateur };
