const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')


require('dotenv/config')
const api = process.env.API_URL

//middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))

const productsSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
})
const Product = mongoose.model('Product', productsSchema)



app.get(`${api}/products`, async (req, res) => {
    const productList = await Product.find()
    res.send(productList)
})
app.post(`${api}/products`, (req, res) => {
    const product = new Product({

        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    })
    product.save().then(createdProduct => {
        res.status(201).json(createdProduct)
    }).catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        })
    })

})
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop-user'
})
    .then(() => {
        console.log('Mongoose is connected...')
    })
    .catch((err) => {
        console.log(err)
    })
app.listen(3000, () => {

    console.log('server is running http://localhost:3000')
})