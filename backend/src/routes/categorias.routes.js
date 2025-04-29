import { Router } from 'express'
import { mostrarCategorias, crearCategoria, actualizarCategoria, eliminarCategoria } from '../controllers/categorias.js'

const router = Router()

// Rutas crud
 
router.get('/', mostrarCategorias) //Ruta para mostrar todas las categorias
router.post('/', crearCategoria) //Ruta para crear categoria
router.put('/:id', actualizarCategoria) //Ruta para actualizar categoria
router.delete('/:id', eliminarCategoria) // Ruta para eliminar categoria

export default router