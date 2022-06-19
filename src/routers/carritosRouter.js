const express = require('express')
const { carritoController } = require('../controllers/carritoController.js')


const carritosRouter = express.Router()


carritosRouter.get('/api/carritos', carritoController.listarAll)
carritosRouter.post('/api/carritos/', carritoController.guardar)
carritosRouter.delete('/api/carritos/:id', carritoController.borrar)
carritosRouter.get('/api/carritos/:id/productos', carritoController.listar)
carritosRouter.put('/api/carritos/:id/productos', carritoController.actualizar)
carritosRouter.delete('/api/carritos/:id/productos/:idProd', carritoController.borrarOne)

module.exports = { carritosRouter }

