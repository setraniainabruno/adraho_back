const fs = require('fs');
const path = require('path');
const FruitDeMer = require("../../models/fruitDeMer");

const modifierFruitDeMer = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        if (!id) {
            return res.status(400).json({ message: 'ID is required' });
        }
        const fruit = await FruitDeMer.findById(id);
        if (!fruit) {
            return res.status(404).json({ message: 'Fruit de mer non trouvé' });
        }
        if (req.file) {
            if (fruit.photo) {
                const oldImagePath = path.join(__dirname, '..', '..', 'public', fruit.photo);
                fs.unlink(oldImagePath, (err) => {
                    if (err) console.error(err);
                });
            }
            updatedData.photo = `/images/${req.file.filename}`;
        }
        const updatedFruit = await FruitDeMer.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json({ updatedFruit });
    } catch (error) {
        res.status(500).json({
            message: 'Erreur lors de la mise à jour du fruit de mer',
            error: error.message,
        });
    }
};

module.exports = { modifierFruitDeMer };
