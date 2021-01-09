const app = require('express')()
const cors = require('cors')
const env = require('dotenv').config().parsed;
const fetch = require('node-fetch');

app.use(cors());

const api = 'https://api.twitter.com/2/tweets/search/recent?query='

const getTweets = async (topic) => {
    return await fetch(`${api}${topic}`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${env.TWITTER_BEAR_TOKEN}` },
    })
    .then(res => res.json())
    .then(json => json);
}


app.get('/api/tweets',async (req,res)=>{
    if(req.query && req.query.topic){
        const tweets = await getTweets(req.query.topic);
        res.status(200).json(tweets).end()
    }
    else{
        res.status(404).json({error:"query parameter required!!"})
    }
})

app.listen(3000, () => {
    console.log("Server is listening on 3000")
});





