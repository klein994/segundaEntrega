const express = require('express')
const { productosController } = require('../controllers/productoController.js')
const productosRouter = express.Router()



productosRouter.get('/api/productos', productosController.listarAll)
productosRouter.post('/api/productos/', productosController.guardar)
productosRouter.get('/api/productos/:id', productosController.listar)
productosRouter.put('/api/productos/:id', productosController.actualizar)
productosRouter.delete('/api/productos/:id', productosController.borrar)


module.exports = { productosRouter }


