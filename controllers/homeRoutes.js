const router = require("express").Router();
const { User, Coins } = require('../models')
router.get('/login', (req, res) => {
    res.render('login')
})
router.get('/home', async (res, req) => {
    try {
        const coinData = await Coins.findAll({
            include: [
                {
                    model: Coins,
                    attributes: 'name'
                }
            ]
        })
        const allCoins = coinData.map((coins) => coins.get({ plain: true }))
        res.render('home', {
            allCoins,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router;