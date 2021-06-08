const router = require('express').Router();
const userRoutes = require('./userRoutes');
const coinsRoutes = require('./coinsRoutes');
router.use('/user', userRoutes);
router.use('/coins', coinsRoutes);
module.exports = router;