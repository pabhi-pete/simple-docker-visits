const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient();

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visitor visited is ' + visits);
        client.set('visits', parseInt(visits + 1));
    })
});

app.listen(5000, () => {
    console.log('listening on port 5000')
});