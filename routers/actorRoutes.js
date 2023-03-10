const express = require('express');
const controller = require('../controllers/actorsController');
const router = express.Router();

router.get('/', controller.fetchActors);

router.post('/newActor', controller.createActor);

router.put('/push', controller.pushActorsInMovie);

router.put('/deleteInMovie', controller.deleteActorInMovie);

router.delete('/delete/:id', controller.deleteActorCompletely);

module.exports = router;