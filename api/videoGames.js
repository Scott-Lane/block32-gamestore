const express = require('express');
const router = express.Router();

const REPLACE_ME = 'HELP REPLACE ME!!!!';

const { getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame } = require('../db/videoGames');

// GET - /api/video-games - get all video games
router.get('/', async (req, res, next) => {
    try {
        const videoGames = await getAllVideoGames();
        res.send(videoGames);
    } catch (error) {
        next(error);
    }
});

// GET - /api/video-games/:id - get a single video game by id
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const videoGame = await getVideoGameById(id);
        res.send(videoGame);
    } catch (error) {
        next(error);
    }
});

// POST - /api/video-games - create a new video game
router.post('/', async (req, res, next) => {
    // LOGIC GOES HERE 
    try {
        console.log(req.body);
        const newGame = req.body;
        // use createVideoGame and pass the appropriate argument to it.
        const result = await createVideoGame(newGame);
        // finally, send the result in our response object
        console.log(result);
        res.send(result);
    } catch (err) {
        console.error(err)
}
    
});


// PUT - /api/video-games/:id - update a single video game by id
router.put('/:id', async (req, res, next) => {
    // LOGIC GOES HERE 
});

// DELETE - /api/video-games/:id - delete a single video game by id
router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log(id);
         //call the delete game function with the id as an argument
        const result = await deleteVideoGame(id);
        console.log(result);
        // send the result in the response to the origin of the request
        res.send(result);
    } catch (err) {
        console.error(err)
    }
    // LOGIC GOES HERE
});

module.exports = router;
