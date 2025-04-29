//Aqui vamos a crear y editar las categorias
import useCategorias from "../hooks/categorias";
function FormCategorias() {
    const { nombre, setNombre, agregarCategoria } = useCategorias();
  
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-gray-400/40 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Agregar categoría
        </h2>
  
        <form className="flex flex-col gap-4">
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre de la categoría"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <button
            type="submit"
            className="p-3 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600"
            onClick={(e) => {
              e.preventDefault();
              if (nombre.trim() === "") {
                console.log("Debes escribir un nombre."); // Aquí podrías mostrar un alerta bonito después
                return;
              }
              agregarCategoria();
            }}
          >
            Agregar categoría
          </button>
        </form>
      </div>
    );
  }
  
  export default FormCategorias;
  
  