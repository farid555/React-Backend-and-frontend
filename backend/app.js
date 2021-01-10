const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const authJwt = require('./helpers/jwt')



require('dotenv/config')
const api = process.env.API_URL

//middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())
app.options('*', cors())   // HTTP options method requests permitted communication 
app.use(authJwt())
//options for a given URL or server...




const categoriesRoutes = require('./routes/categories')
const ordersRoutes = require('./routes/orders')
const productsRoutes = require('./routes/products')
const usersRoutes = require('./routes/users')





//Api Routes define here....

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