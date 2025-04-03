const Activite = require("../../models/activite");

const listeToutActivite = async (req, res) => {
    try {
        const activites = await Activite.find();
        res.status(200).json({ activites });
    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = listeToutActivite;