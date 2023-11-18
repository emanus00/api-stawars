const express = require('express');
const router = express.Router();
const { Film } = require('../database/db.config'); // Ajuste o caminho conforme a estrutura do seu projeto

router.put("/:id", async (req, res) => {
    try {
        const film = await Film.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            image_url: req.body.image_url,
            trailer_url: req.body.trailer_url
        }, {
            new: true
        });

        res.json(film);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const film = await Film.findByIdAndDelete(req.params.id);
        res.json(film);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/add-film', async (req, res) => {
    const film = new Film({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    });

    try {
        const savedFilm = await film.save();
        res.json(savedFilm);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
