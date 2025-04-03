const Pointage = require("../../models/pointage");

const listeToutPointage = async (req, res) => {
    try {
        const pointages = await Pointage.find().populate("idEmploye");
        res.status(200).json({ pointages });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = listeToutPointage;