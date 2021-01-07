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


const categoriesRoutes = require('./routes/categories')
const ordersRoutes = require('./routes/orders')
const productsRoutes = require('./routes/products')
const usersRoutes = require('./routes/users')





//Router

app.use(`${api}/categories`, categoriesRoutes)
app.use(`${api}/products`, productsRoutes)
app.use(`${api}/users`, usersRoutes)
app.use(`${api}/orders`, ordersRoutes)







//Database connection status

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