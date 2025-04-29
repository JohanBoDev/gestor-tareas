import axios from "axios";
import { useState } from "react";

function useTareas() {
    const API_URL = "http://localhost:3000/api/tareas";
    const [tareas, setTareas] = useState([])
    const [form, setForm] = useState({
        titulo: "",
        descripcion: "",
        completada: false,
        categoria_id: ""
    })

    const agregarTareas = async () => {
        try {
            const tarea = await axios.post(`${API_URL}/`,
                form
            )
            setTareas([...tareas, tarea.data])
            setForm({
                titulo: "",
                descripcion: "",
                completada: false,
                categoria_id: ""
            })
        } catch (error) {
            console.error(error.message)
        }
    }

    const obtenerTareas = async () => {
        try {
            const respuesta = await axios.get(`${API_URL}/`)
            setTareas(respuesta.data)
        } catch (error) {
            console.error(error.message)

        }
    }

    const eliminarTarea = async (id) => {
        try {
            const tarea = await axios.delete(`${API_URL}/${id}`);
            await obtenerTareas();
        } catch (error) {
            console.log(error.message)
        }
    }

    const editarTarea = async (id, datosActualizados) => {
        try {
            const respuesta = await axios.put(`${API_URL}/${id}`, datosActualizados);
            await obtenerTareas();
        } catch (error) {
            console.log(error.message);
        }
    }

    return { agregarTareas, form, setForm, tareas, obtenerTareas, eliminarTarea, editarTarea }
}

export default useTareas