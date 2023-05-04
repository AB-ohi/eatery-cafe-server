const express = require('express')
const app = express()
const  cors = require('cors')
const port = process.env.port || 1000

const chef = require('./data/chef.json')
const ans = require('./data/ans.json')


app.use(cors());

app.get('/', (req, res) =>{
    res.send('restureand is running')
});

app.get('/chef',(req, res) =>{
    res.send(chef)
})
app.get('/ans',(req, res) =>{
    res.send(ans)
})

app.listen(port, ()=>{
    console.log(`api is running on port:${port}`)
})