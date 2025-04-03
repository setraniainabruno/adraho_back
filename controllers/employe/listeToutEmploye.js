const Employe = require('../../models/employe');

const listeToutEmploye = async (req, res) => {
    try {
        const employes = await Employe.find();
        if (employes.length === 0) {
            return res.status(404).json({ message: 'Aucun employé trouvé' });
        }
        res.status(200).json({ employes });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = listeToutEmploye;
