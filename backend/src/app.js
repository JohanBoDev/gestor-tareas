import express from 'express';
import cors from 'cors'
import tareasRoutes from './routes/tareas.routes.js'
import categoriasRoutes from './routes/categorias.routes.js'

//iniciamos express
const app = express()

//middlewares
app.use(cors())
app.use(express.json())

//rutas
app.use('/api/tareas', tareasRoutes)
app.use('/api/categorias', categoriasRoutes)

// Ruta base
app.get('/', (req, res) => {
    res.send('API de Gestor de Tareas funcionando');
  });

  export default app;