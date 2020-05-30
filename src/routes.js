const express = require('express');

const validateSession = require('./services/validate-session');

const router = express.Router();

router.get('/', validateSession);

module.exports = router;
