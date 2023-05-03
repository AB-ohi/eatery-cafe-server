const express = require('express')
const app = express()
const port = process.env.port || 1000

const chef = require('./data/chef.json')

app.get('/', (req, res) =>{
    res.send('restureand is running')
});

app.get('/chef',(req, res) =>{
    res.send(chef)
})

app.listen(port, ()=>{
    console.log(`api is running on port:${port}`)
})