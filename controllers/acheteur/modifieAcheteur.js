const fs = require('fs');
const path = require('path');
const Acheteur = require('../../models/acheteur');

const modifierAcheteur = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = { ...req.body };
        const acheteur = await Acheteur.findOne({ _id: id });

        if (!acheteur) {
            return res.status(404).json({ message: 'Acheteur non trouvé avec cet ID' });
        }
        if (req.file) {
            if (acheteur.photo) {
                const oldImagePath = path.join(__dirname, '..', '..', 'public', acheteur.photo);
                fs.unlink(oldImagePath, (err) => {
                    if (err) {
                        console.error(err.message);
                    }
                });
            }
            updatedData.photo = `/images/${req.file.filename}`;
        }
        const updatedAcheteur = await Acheteur.findByIdAndUpdate(id, updatedData, { new: true });

        res.status(200).json({ updatedAcheteur });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = modifierAcheteur;
