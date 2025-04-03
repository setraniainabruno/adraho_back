const fs = require('fs');
const path = require('path');
const Employe = require('../../models/employe');


const supprimereEmploye = async (req, res) => {
    try {
        const { id } = req.params;
        const employe = await Employe.findById(id);

        if (!employe) {
            return res.status(404).json({ message: 'Employé non trouvé' });
        }
        if (employe.photo) {
            const photoPath = path.join(__dirname, '..', '..', 'public', employe.photo);
            fs.unlink(photoPath, (err) => {
                if (err) {
                    console.log(err.message);
                }
            });
        }
        await Employe.findByIdAndDelete(id);

        res.status(200).json({ message: 'Employé supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = supprimereEmploye;
