const Conge = require("../../models/conge");


const supprimerConge = async (req, res) => {
    try {
        const { id } = req.params;
        const conge = await Conge.findById(id);

        if (!conge) {
            return res.status(404).json({ message: 'Congé non trouvé' });
        }

        await Conge.findByIdAndDelete(id);
        res.status(200).json({ message: 'Congé supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = supprimerConge;