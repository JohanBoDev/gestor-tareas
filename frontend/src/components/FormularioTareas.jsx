//Aqui vamos a crear y editar las categorias
import useTareas from "../hooks/tareas";
import useCategorias from "../hooks/categorias";
import { useEffect } from "react";
function FormTareas() {
    const { form, setForm, agregarTareas } = useTareas();
    const { obtenerCategorias, categorias } = useCategorias()
    useEffect(() => {
        obtenerCategorias()
    }, [categorias])

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-gray-400/40 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">
                Agregar tareas
            </h2>

            <form className="flex flex-col gap-4">
                <input
                    type="text"
                    value={form.titulo}
                    onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                    placeholder="Titulo de la tarea"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    value={form.descripcion}
                    onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                    placeholder="Descripción de la tarea" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                    value={form.categoria_id}
                    onChange={(e) => setForm({ ...form, categoria_id: e.target.value })}
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Selecciona una categoría</option>

                    {categorias.length > 0 ? (
                        categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.nombre}
                            </option>
                        ))
                    ) : (
                        <option value="" disabled>No hay categorías disponibles</option>
                    )}
                </select>



                <button
                    type="submit"
                    className="p-3 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600"
                    onClick={(e) => {
                        e.preventDefault();
                        if (form.titulo.trim() === "" || form.descripcion.trim() === "" || form.categoria_id === "") {
                            console.log("Debes llenar los campos.");
                            return;
                        }
                        agregarTareas();
                    }}
                >
                    Agregar tarea
                </button>
            </form>
        </div>
    );
}

export default FormTareas;

