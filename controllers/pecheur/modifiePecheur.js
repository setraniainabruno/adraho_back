const fs = require('fs');
const path = require('path');
const Pecheur = require('../../models/pecheur');

const modifierPecheur = async (req, res) => {
    try {
        const { id } = req.params;
        let updatedData = { ...req.body };

        const pecheur = await Pecheur.findOne({ _id: id });

        if (!pecheur) {
            return res.status(404).json({ message: 'Pêcheur non trouvé avec ce matricule' });
        }

        if (req.file) {
            if (pecheur.photo) {
                const oldImagePath = path.join(__dirname, '..', '..', 'public', pecheur.photo);
                fs.unlink(oldImagePath, (err) => {
                    if (err) {
                        console.error("Erreur lors de la suppression de l'image :", err);
                    }
                });
                console.log(oldImagePath)
            }

            updatedData.photo = `/images/${req.file.filename}`;
        }

        const updatedPecheur = await Pecheur.findOneAndUpdate({ _id: id }, updatedData, { new: true });

        res.status(200).json({ updatedPecheur });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Erreur lors de la mise à jour du pêcheur',
            error: error.message,
        });
    }
};

module.exports = { modifierPecheur };
