import {Router} from 'express'
import { obtenerTareas, obtenerTareaPorId, actualizarTarea, crearTarea, eliminarTarea } from '../controllers/tareas.js'

const router = Router()

//Rutas crud

router.get('/', obtenerTareas); // Endpoint para obtener todas las tareas
router.get('/:id', obtenerTareaPorId) // Endpoint para obtener tarea por id
router.put('/:id', actualizarTarea) //Endpoint para actualizar una tarea
router.post('/', crearTarea) // Endpoint para crear tarea
router.delete('/:id', eliminarTarea) // Endpoint para eliminar tarea

export default router;