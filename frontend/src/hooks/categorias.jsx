import axios from "axios";
import { useState } from "react";

function useCategorias() {
  const API_URL = "http://localhost:3000/api/categorias";
  const [categorias, setCategorias] = useState([]);
  const [nombre, setNombre] = useState("");

  const agregarCategoria = async () => {
    try {
      await axios.post(`${API_URL}/`, { nombre });
      setNombre("");
    } catch (error) {
      throw error; // 🔥 Dejas que el componente maneje el error
    }
  };

  const obtenerCategorias = async () => {
    try {
      const respuesta = await axios.get(`${API_URL}/`);
      setCategorias(respuesta.data || [])
    } catch (error) {
      throw error;
    }
  };

  const actualizarCategoria = async (id) => {
    try {
      await axios.put(`${API_URL}/${id}`, { nombre });
    } catch (error) {
      console.error(error.message);
      setCategorias([]);
    }
  };

  const eliminarCategoria = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      await obtenerCategorias();
    } catch (error) {
      throw error;
    }
  };

  return {
    categorias,
    nombre,
    setNombre,
    agregarCategoria,
    actualizarCategoria,
    eliminarCategoria,
    obtenerCategorias,
  };
}

export default useCategorias;
