const router = require("express").Router();
const { User, Coins } = require('../models')
const CoinGecko = require('coingecko-api');
 
const CoinGeckoClient = new CoinGecko();
 
router.get('/login', (req, res) => {
    res.render('login')
})
router.get('/home', async (req, res) => {
    try {
        const coinData = await Coins.findAll({})
        console.log(coinData)
        const allCoins = coinData.map((coins) => coins.get({ plain: true }))

        console.log(allCoins)
        let price = await CoinGeckoClient.simple.price({
            ids: [allCoins[0].name, allCoins[1].name, allCoins[2].name, allCoins[3].name, allCoins[4].name, allCoins[5].name, allCoins[6].name, allCoins[7].name, allCoins[8].name, allCoins[9].name],
            vs_currencies: ['usd', 'eur', 'gbp']
        })
        console.log(price)
        let bit = await CoinGeckoClient.coins.fetch(allCoins[0].name,{
         })
         let eth = await CoinGeckoClient.coins.fetch(allCoins[1].name,{
        })
        let chain = await CoinGeckoClient.coins.fetch(allCoins[2].name,{
        })
        let doge = await CoinGeckoClient.coins.fetch(allCoins[3].name,{
        })
        let tet = await CoinGeckoClient.coins.fetch(allCoins[4].name,{
        })
        let rip = await CoinGeckoClient.coins.fetch(allCoins[5].name,{
        })
        let car = await CoinGeckoClient.coins.fetch(allCoins[6].name,{
        })
        let polk = await CoinGeckoClient.coins.fetch(allCoins[7].name,{
        })
        let uni = await CoinGeckoClient.coins.fetch(allCoins[8].name,{
        })
        let lite = await CoinGeckoClient.coins.fetch(allCoins[9].name,{
        })
     
        res.render('home', {
            coins: allCoins,
            price: price,
            bit: bit,
            eth: eth,
            chain: chain,
            doge: doge,
            tet: tet,
            rip: rip,
            car: car,
            polk: polk,
            uni: uni,
            lite: lite,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
module.exports = router;