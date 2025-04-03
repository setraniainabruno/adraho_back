const fs = require('fs');
const path = require('path');
const Employe = require('../../models/employe');

const modifierEmploye = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = { ...req.body };

        const employe1 = await Employe.findById(id);
       
        if (req.file) {
            if (employe1.photo) {
                const ancienPhotoPath = path.join(__dirname, '..', '..', 'public', employe1.photo);
                fs.unlink(ancienPhotoPath, (err) => {
                    if (err) {
                        console.log(err.message);
                    }
                });
            }
            updateData.photo = `/images/${req.file.filename}`;
        }

        const employe = await Employe.findOneAndUpdate({ _id: id }, updateData, { new: true });

        if (!employe) {
            return res.status(404).json({ message: 'Employé non trouvé' });
        }

        res.status(200).json({ employe });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = modifierEmploye;
