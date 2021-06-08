const router = require('express').Router();
const { Coins } = require('../../models');
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko
let nowDate = new Date();
let date_today = nowDate.getDate() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getFullYear();
router.get("/allcoins", async (req, res) => {
    let datas = await CoinGeckoClient.coins.all();
    res.json(datas)
})

router.post('/', async (req, res) => {
    try {
        const newCoins = await Coins.create({
            ...req.body,
            coins_id: req.session.coins_id,
        });
        res.status(200).json(newCoins);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/', (req, res) => {
    Coins.findAll({
        attributes:
            [
                "id",
                "name",
                "price"
            ]
    })
        .then(coinsData => res.json(coinsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', async (req, res) => {
    try {
        const coinsData = await Coins.destroy({
            where: {
                id: req.params.id,
                coins_id: req.session.coins_id,
            },
        });

        if (!coinsData) {
            res.status(404).json({ message: 'No Coins matching this id!' });
            return;
        }

        res.status(200).json(coinsData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;