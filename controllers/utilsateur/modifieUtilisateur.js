const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const Utilisateur = require('../../models/utilisateur');

const modifierUtilisateur = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = { ...req.body };

        const utilisateur = await Utilisateur.findOne({ _id: id });

        if (!utilisateur) {
            return res.status(404).json({ message: 'Utilisateur non trouvé avec cet ID' });
        }

        if (utilisateur.motDePasse) {
            const motDePasseCrypte = await bcrypt.hash(req.body.motDePasse, 10);
            updatedData.motDePasse = motDePasseCrypte;
        }
        if (req.file) {
            if (utilisateur.photo) {
                const oldImagePath = path.join(__dirname, '..', '..', 'public', utilisateur.photo);
                fs.unlink(oldImagePath, (err) => {
                    if (err) {
                        console.error(err.message);
                    }
                });
            }
            updatedData.photo = `/images/${req.file.filename}`;
        }
        const updatedUtilisateur = await Utilisateur.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });

        res.status(200).json({ updatedUtilisateur });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { modifierUtilisateur };
