const express = require('express')
const app = express()
const  cors = require('cors')
const port = process.env.PORT || 1000
const ans = require('./data/ans.json')

const chef = require('./data/chef.json')
const details = require('./data/detail.json')


app.use(cors());

app.get('/', (req, res) =>{
    res.send('restureand is running')
});

app.get('/ans',(req, res) =>{
    res.send(ans)
})

app.get('/chef',(req, res) =>{
    res.send(chef)
})
app.get('/chef/:id',(req,res) =>{
    const id = req.params.id;
    console.log(id)
    const selectedDetail = chef.find(n => n.id === id);
    res.send(selectedDetail);
})

app.listen(port, ()=>{
    console.log(`api is running on port:${port}`)
})