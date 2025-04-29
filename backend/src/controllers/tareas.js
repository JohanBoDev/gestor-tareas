import pool from '../db/db.js'

export const obtenerTareas = async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM tareas");
      if (result.rows.length > 0) {
        res.json(result.rows);
      } else {
        res.status(200).json({ message: "No tienes tareas" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al obtener tareas", details: error.message });
    }
  };

  export const obtenerTareaPorId = async (req,res) => {
    const { id } = req.params;
    try {
      const result = await pool.query("SELECT * FROM tareas WHERE id = $1", [id])
      if(result.rows.length > 0){
        res.status(200).json(result.rows)
      }else{
        res.status(404).json({message: "No existe una tarea con ese id"})
      }
    } catch (error) {
      res.status(500).json({ error: "Error al obtener tareas", details: error.message });
    }
  }

  export const actualizarTarea = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, completada } = req.body;
    try {
      if(!titulo || !descripcion ){
        return res.status(400).json({error : "Debes completar un campo al menos"})
      }
      const result = await pool.query
      (`UPDATE tareas
         SET titulo = $1, descripcion = $2, completada = $3 WHERE id = $4 RETURNING*`, [titulo, descripcion, completada, id])
         if(result.rows.length > 0){
          res.status(200).json(result.rows)
        }else{
          res.status(404).json({message: "No existe una tarea con ese id"})
        }
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la tarea", details: error.message });
    }
  }

  export const crearTarea = async (req,res) => {
    const {titulo, descripcion, completada, categoria_id } = req.body;
    try {
      if(!titulo || !descripcion || !categoria_id){
        return res.status(400).json({error: "Debes completar todos los campos"})
      }
      const result =await pool.query(
        `INSERT INTO tareas (titulo, descripcion, completada, categoria_id)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
        [titulo, descripcion, completada, categoria_id]
      );
      res.status(201).json(result.rows)
    } catch (error) {
      res.status(500).json({ error: "Error al crear la tarea", details: error.message });
    }
  }

  export const eliminarTarea = async (req,res) => {
    const { id } = req.params;
    try {
   const result = await pool.query(`DELETE FROM tareas WHERE id = $1`, [id])
   if(result.rowCount === 0){
    return res.status(404).json({message: "Esa tarea no existe"})
   }
   else{
    return res.status(200).json({message: "Tarea eliminada exitosamente"})
   }
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la tarea", details: error.message });
    }
  }