const express = require('express');
const profileController = require('../controllers/profileController');

const router = express.Router();

router.put('/update-profile', profileController.updateProfile);

module.exports = router;