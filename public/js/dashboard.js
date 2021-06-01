const CoinGecko = require('coingecko-api');
//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();
let nowDate = new Date();
let date_today = nowDate.getDate() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getFullYear();
console.log(date_today)
//3. Make calls
const getBitAll = async () => {
    let res = await CoinGeckoClient.coins.fetch('bitcoin', {
    })
    console.log("24 hour Bitcoin price change " + res.data.market_data.price_change_24h)
    console.log("Bitcoin percentage change past 7 days " + res.data.market_data.price_change_percentage_7d)
    console.log("Bitcoin percentage change past 14 days " + res.data.market_data.price_change_percentage_14d)
    console.log("Bitcoin Rank " + res.data.market_cap_rank)
}
const getLiteAll = async () => {
    let res = await CoinGeckoClient.coins.fetch('litecoin', {
    })
    console.log("24 hour Litecoin price change " + res.data.market_data.price_change_24h)
    console.log("Litecoin percentage change past 7 days " + res.data.market_data.price_change_percentage_7d)
    console.log("Litecoin percentage change past 14 days " + res.data.market_data.price_change_percentage_14d)
    console.log("Litecoin Rank " + res.data.market_cap_rank)
}
const getDogeAll = async () => {
    let res = await CoinGeckoClient.coins.fetch('dogecoin', {
    })
    console.log("24 hour Dogecoin price change " + res.data.market_data.price_change_24h)
    console.log("Dogecoin percentage change past 7 days " + res.data.market_data.price_change_percentage_7d)
    console.log("Dogecoin percentage change past 14 days " + res.data.market_data.price_change_percentage_14d)
    console.log("Dogecoin Rank " + res.data.market_cap_rank)
}
const getEthAll = async () => {
    let res = await CoinGeckoClient.coins.fetch('ethereum', {
    })
    console.log("24 hour Ethereum price change " + res.data.market_data.price_change_24h)
    console.log("Ethereum percentage change past 7 days " + res.data.market_data.price_change_percentage_7d)
    console.log("Ethereum percentage change past 14 days " + res.data.market_data.price_change_percentage_14d)
    console.log("Ethereum Rank " + res.data.market_cap_rank)
}
const getRipAll = async () => {
    let res = await CoinGeckoClient.coins.fetch('ripple', {
    })
    console.log("24 hour Ripple price change " + res.data.market_data.price_change_24h)
    console.log("Ripple percentage change past 7 days " + res.data.market_data.price_change_percentage_7d)
    console.log("Ripple percentage change past 14 days " + res.data.market_data.price_change_percentage_14d)
    console.log("Ripple Rank " + res.data.market_cap_rank)
}
const getBit = async () => {
    let res = await CoinGeckoClient.coins.fetchHistory('bitcoin', {
        date: date_today
    });
    console.log("Current Bitcoin price : " + res.data.market_data.current_price.usd)
    getBitAll();
};
const getEth = async () => {
    let res = await CoinGeckoClient.coins.fetchHistory('ethereum', {
        date: date_today
    });
    console.log("Current Ethereum price : " + res.data.market_data.current_price.usd)
    getEthAll();
}
const getDoge = async () => {
    let res = await CoinGeckoClient.coins.fetchHistory('dogecoin', {
        date: date_today
    });
    console.log("Current Dogecoin price : " + res.data.market_data.current_price.usd)
    getDogeAll();
}
const getRip = async () => {
    let res = await CoinGeckoClient.coins.fetchHistory('ripple', {
        date: date_today
    });
    console.log("Current Ripple price : " + res.data.market_data.current_price.usd)
    getRipAll();
}
const getLite = async () => {
    let res = await CoinGeckoClient.coins.fetchHistory('litecoin', {
        date: date_today
    });
    console.log("Current Litecoin price : " + res.data.market_data.current_price.usd)
    getLiteAll();
}
getBit();
getEth();
getLite();
getRip();
getDoge();