import pool from '../db/db.js'

export const mostrarCategorias = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categorias')
    if(result.rows.length > 0){
        res.status(200).json(result.rows)
    }
    else{
        res.status(200).json({message: "No tienes categorias agregadas"})
    }
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const crearCategoria = async (req,res) => {
    const {nombre} = req.body
    if(!nombre){
        return res.status(400).json({message: "El nombre de la categoria es obligatorio"})
    }
    try {
        const result = await pool.query(`INSERT INTO categorias (nombre) VALUES ($1) RETURNING*`, [nombre]);
        res.status(201).json({ message: "Categoria creada exitosamente", data: result.rows})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const actualizarCategoria = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;

  try {
    if (!nombre) {
      return res.status(400).json({ message: "Debes poner el nombre de la categoría" });
    }

    const result = await pool.query(
      'UPDATE categorias SET nombre = $1 WHERE id = $2 RETURNING *',
      [nombre, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }

    res.status(200).json({
      message: "Categoría actualizada correctamente",
      data: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const eliminarCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    // Primero borras las tareas relacionadas
    await pool.query('DELETE FROM tareas WHERE categoria_id = $1', [id]);

    // Ahora borras la categoría
    const result = await pool.query('DELETE FROM categorias WHERE id=$1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Esa categoría no existe" });
    }

    res.status(200).json({ message: "Categoría y sus tareas eliminadas correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
