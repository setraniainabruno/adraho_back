const fs = require('fs');
const path = require('path');
const Acheteur = require('../../models/acheteur');

const supprimerAcheteur = async (req, res) => {
    const { id } = req.params;
    try {
        const acheteur = await Acheteur.findById(id);
        if (!acheteur) {
            return res.status(404).json({ message: 'Acheteur non trouvé' });
        }
        if (acheteur.photo) {
            const photoPath = path.join(__dirname, '..', '..', 'public', acheteur.photo);
            fs.unlink(photoPath, (err) => {
                if (err) {
                    console.error(err.message);
                }
            });
        }
        await Acheteur.findByIdAndDelete(id);

        res.status(200).json({ message: 'Acheteur et sa photo supprimés avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'acheteur', error });
    }
};

module.exports = supprimerAcheteur;
