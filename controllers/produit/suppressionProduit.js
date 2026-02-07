const fs = require('fs');
const path = require('path');
const Produit = require('../../models/produit');


const supprimerProduit = async (req, res) => {
    const { id } = req.params;
    try {
        const produit = await Produit.findById(id);
        if (!produit) {
            return res.status(404).json({ message: 'Produit n\'existe pas' });
        }

        if (produit.photo) {
            const ancienPhoto = path.join(__dirname, '..', '..', 'public', produit.photo);
            fs.unlink(ancienPhoto, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
        await Produit.findByIdAndDelete(id);

        res.status(200).json({ mesage: 'Produit et sa photo supprimée avec succés ' })
    } catch (err) {
        res.status(500).json({ err });
    }
};

module.exports = supprimerProduit;