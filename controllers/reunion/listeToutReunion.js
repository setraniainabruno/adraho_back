const Reunion = require("../../models/reunion");

const listeToutReunion = async (req, res) => {
    try {
        const reunions = await Reunion.find();
        res.status(200).json({ reunions });
    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = listeToutReunion;