const fs = require('fs');
const path = require('path');
const Pecheur = require('../../models/pecheur');

const modifierPecheur = async (req, res) => {
    try {
        const { matricule } = req.params;
        const updatedData = req.body;

        const pecheur = await Pecheur.findOne({ matricule });

        if (!pecheur) {
            return res.status(404).json({ message: 'Pêcheur non trouvé avec ce matricule' });
        }

        if (req.file) {
            if (pecheur.photo) {
                const oldImagePath = path.join(__dirname, '..', '..', 'public', pecheur.photo);
                fs.unlink(oldImagePath, (err) => {
                    if (err) {
                        console.error(err);
                    }
                });
            }

            updatedData.photo = `/images/${req.file.filename}`;
        }

        const updatedPecheur = await Pecheur.findOneAndUpdate({ matricule }, updatedData, { new: true });

        res.status(200).json({ updatedPecheur });
    } catch (error) {
        res.status(500).json({
            message: 'Erreur lors de la mise à jour du pêcheur',
            error: error.message,
        });
    }
};

module.exports = { modifierPecheur };
