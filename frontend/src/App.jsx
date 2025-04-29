import ListarCategorias from './components/ListaCategorias'
import './App.css'
import ListaTareas from './components/ListaTareas'

function App() {

  return (
    <>
<h1>TODO APP Tareas</h1>
<ListaTareas />
<div className="max-w-6xl mx-auto mt-10 p-8 bg-gray-400/40 rounded-2xl shadow-lg"> 
 <ListarCategorias />

</div>
    </>
  )
}

export default App
