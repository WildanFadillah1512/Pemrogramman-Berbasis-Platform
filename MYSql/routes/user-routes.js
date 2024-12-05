const express = require('express');
const userControler = require('../controler/user-controlers');

const router = express.Router(); // Perbaikan di sini

router.get('/', userControler.getALLUser);
router.get('/:id', userControler.getUserById);

module.exports = router;

