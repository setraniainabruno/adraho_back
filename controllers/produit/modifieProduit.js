const fs = require('fs');
const path = require('path');
const Produit = require('../../models/produit');

const modifierProduit = async (req, res) => {
    try {

        const { id } = req.params;
        const updateData = { ...req.body };

        const produit = await Produit.findById(id);

        if (!produit) {
            return res.status(404).json({ message: 'Produit non trouvé avec cet ID' });
        }
        if (req.file) {
            if (produit.photo) {
                const ancienPhoto = path.join(__dirname, '..', '..', 'public', produit.photo);
                fs.unlink(ancienPhoto, (err) => {
                    if (err) {
                        console.log(err.message);
                    }
                })
            }
            updateData.photo = `/images/${req.file.filename}`;
        }
        const nouveauProduit = await Produit.findByIdAndUpdate(id, updateData, { new: true })

        res.status(200).json({ nouveauProduit });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = modifierProduit;