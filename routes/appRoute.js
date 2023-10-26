const express = require('express');
const appController = require('../controllers/appController');
const router = express.Router();

router.get('/', appController.homeController);
router.post('/', appController.homeControllerPost);

module.exports = router;

