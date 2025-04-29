import useCategorias from "../hooks/categorias";
import { useEffect, useState } from "react";
import FormCategorias from "./FormularioCategoria";

function ListarCategorias() {
    const { obtenerCategorias, eliminarCategoria, categorias, nombre, setNombre, actualizarCategoria } = useCategorias()
    const [idEditando, setIdEditando] = useState(null);

    useEffect(() => {
        obtenerCategorias()
    }, [categorias])
    return (
        <>
        <div className="max-w-md mx-auto">
            <h1 className="text-4xl font-bold my-12">Lista de Categorías</h1>
            {categorias.length > 0 ? (
                <ul className="space-y-4">
                    {categorias.map((categoria) => (
                        <li
                            key={categoria.id}
                            className="bg-gray-400/50 p-4 rounded-xl flex items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 flex-1">
                                {idEditando === categoria.id ? (
                                    <input
                                        type="text"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        placeholder="Actualizar nombre"
                                        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
                                ) : (
                                    <p className="text-white font-medium">{categoria.nombre}</p>
                                )}
                            </div>

                            <div className="flex items-center gap-2">
                                {idEditando === categoria.id ? (
                                    <button
                                        className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors"
                                        onClick={() => { actualizarCategoria(categoria.id); setIdEditando(null); } }
                                    >
                                        ✅
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setIdEditando(categoria.id)}
                                        className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                                    >
                                        <i className="bx bx-edit"></i>
                                    </button>
                                )}

                                <button
                                    onClick={() => eliminarCategoria(categoria.id)}
                                    className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
                                >
                                    <i className="bx bx-trash"></i>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (<p>No tienes categorias</p>)}

        </div><FormCategorias /></>
    )
}

export default ListarCategorias