import { useEffect, useState } from "react";
import useTareas from "../hooks/tareas";
import useCategorias from "../hooks/categorias";
import FormTareas from "./FormularioTareas";

function ListaTareas() {
    const { tareas, obtenerTareas, eliminarTarea, editarTarea } = useTareas();
    const { categorias, obtenerCategorias } = useCategorias();

    const [idEditando, setIdEditando] = useState(null); 
    const [formEdicion, setFormEdicion] = useState({
        titulo: "",
        descripcion: "",
        completada: false,
        categoria_id: ""
    });

    useEffect(() => {
        obtenerTareas();
        obtenerCategorias();
    }, [tareas]);

    const empezarEdicion = (tarea) => {
        setIdEditando(tarea.id);
        setFormEdicion({
            titulo: tarea.titulo,
            descripcion: tarea.descripcion,
            completada: tarea.completada,
            categoria_id: tarea.categoria_id
        });
    };

    const guardarEdicion = async () => {
        await editarTarea(idEditando, formEdicion);
        setIdEditando(null);
        setFormEdicion({
            titulo: "",
            descripcion: "",
            completada: false,
            categoria_id: ""
        });
    };

    return (
        <>
            <div className="max-w-6xl mx-auto mt-10 p-8 bg-gray-400/40 rounded-2xl shadow-lg">
                <FormTareas />
            </div>

            <div className="max-w-6xl mx-auto mt-10 p-8 bg-gray-400/40 rounded-2xl shadow-lg">
                <h1 className="text-4xl font-bold mb-12 text-white text-center">Lista de tareas</h1>

                {tareas.length > 0 ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
  {tareas.map((tarea) => {
    const categoriaTarea = categorias.find((cat) => cat.id === tarea.categoria_id);

    return (
      <li
        key={tarea.id}
        className="bg-gray-300/20 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col justify-between min-h-[250px] group"
      >
        {/* Header: Título y Categoría */}
        <div className="flex justify-between items-center mb-6">
          {idEditando === tarea.id ? (
            <input
              type="text"
              value={formEdicion.titulo}
              onChange={(e) => setFormEdicion({ ...formEdicion, titulo: e.target.value })}
              className="border border-gray-300 rounded-xl p-3 w-full text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ) : (
            <h3 className="text-white text-xl font-bold truncate max-w-[65%]">{tarea.titulo}</h3>
          )}

          <span className={`text-white text-xs font-semibold px-3 py-1 rounded-full ${categoriaTarea ? 'bg-blue-500' : 'bg-gray-500'}`}>
            {categoriaTarea ? categoriaTarea.nombre : "Sin categoría"}
          </span>
        </div>

        {/* Descripción */}
        {idEditando === tarea.id ? (
          <textarea
            value={formEdicion.descripcion}
            onChange={(e) => setFormEdicion({ ...formEdicion, descripcion: e.target.value })}
            className="border border-gray-300 rounded-xl p-3 w-full text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
          />
        ) : (
          <p className="text-gray-200 text-sm mb-6 line-clamp-3">{tarea.descripcion}</p>
        )}

        {/* Footer: Estado y acciones */}
        <div className="flex justify-between items-center mt-auto">
          <p className="text-white text-sm font-light flex items-center gap-1">
            {tarea.completada ? "✅ Completada" : "⏳ Pendiente"}
          </p>

          <div className="flex gap-3">
            {idEditando === tarea.id ? (
              <button
                onClick={guardarEdicion}
                className="w-10 h-10 bg-green-500 hover:bg-green-600 flex items-center justify-center rounded-full transition-all text-white text-lg"
              >
                ✅
              </button>
            ) : (
              <button
                onClick={() => empezarEdicion(tarea)}
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 flex items-center justify-center rounded-full transition-all text-white text-lg"
              >
                <i className="bx bx-edit"></i>
              </button>
            )}

            <button
              onClick={() => eliminarTarea(tarea.id)}
              className="w-10 h-10 bg-red-500 hover:bg-red-600 flex items-center justify-center rounded-full transition-all text-white text-lg"
            >
              <i className="bx bx-trash"></i>
            </button>
          </div>
        </div>
      </li>
    );
  })}
</ul>

                ) : (
                    <p className="text-center text-gray-200 font-medium">No tienes tareas agregadas</p>
                )}
            </div>
        </>
    );
}

export default ListaTareas;
