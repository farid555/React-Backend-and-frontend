const express = require('express')
const app = express()
const bodyParser = require('body-parser')


require('dotenv/config')
const api = process.env.API_URL

//middleware
app.use(bodyParser.json())


app.get(`${api}/products`, (req, res) => {
    const product = {         //product is object
        id: 1,
        name: 'hair dresser',
        image: 'some_url',

    }
    res.send(product)
})

app.post(`${api}/products`, (req, res) => {
    const newProduct = req.body
    console.log(newProduct)
    res.send(newProduct)
})


app.listen(3000, () => {

    console.log('server is running http://localhost:3000')
})