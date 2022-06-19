const express = require('express')
const { Server: HttpServer } = require('http')
const { productosRouter } = require('./routers/productosRouter.js')
const { carritosRouter } = require('./routers/carritosRouter.js')

const app = express()
const bodyParser = require("body-parser");
const httpServer = new HttpServer(app)


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(productosRouter)
app.use(carritosRouter)


const PORT = 8080
const server = httpServer.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})


