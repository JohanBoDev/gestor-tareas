## 📂 Estructura Recomendada para el Frontend

### Estructura de carpetas y archivos

```
src/
├── api/
│   ├── tareas.js
│   └── categorias.js
├── components/
│   ├── ListaTareas.jsx
│   ├── FormularioTarea.jsx
│   ├── ListaCategorias.jsx
│   └── FormularioCategoria.jsx
├── pages/
│   └── Home.jsx
├── App.jsx
└── main.jsx
```

### Contenido de cada parte

| Carpeta/Archivo | Contenido |
|:---|:---|
| `api/` | Funciones para consumir los endpoints (`fetch` o `axios`) separados por entidad. |
| `components/` | Componentes visuales reutilizables para tareas y categorías. |
| `pages/` | Páginas principales que juntan los componentes (por ahora solo `Home`). |
| `App.jsx` | Configura las rutas o muestra el `Home` directamente. |
| `main.jsx` | Punto de entrada de React (configurado por Vite). |

### Flujo de trabajo recomendado

1. Crear funciones en `/api` como:
   - `obtenerTareas()`, `crearTarea()`, `editarTarea(id)`, `eliminarTarea(id)`
   - `obtenerCategorias()`, `crearCategoria()`, `editarCategoria(id)`, `eliminarCategoria(id)`

2. Crear componentes en `/components` que usen esas funciones:
   - `ListaTareas.jsx` para mostrar todas las tareas.
   - `FormularioTarea.jsx` para crear o editar tareas.
   - `ListaCategorias.jsx` para mostrar todas las categorías.
   - `FormularioCategoria.jsx` para crear o editar categorías.

3. Armar la vista principal en `Home.jsx` combinando los componentes.

4. Usar `App.jsx` para renderizar `Home`.

### Ventajas de esta estructura

- 🔥 Mantienes el código ordenado.
- 🛠️ Reutilizas componentes fácilmente.
- 🧹 Escalas el proyecto sin que se vuelva caótico.
- 🚀 Es el estándar profesional que buscan en empresas.

---

**Importante:**

> ❌ No hagas todo en `App.jsx`.
>
> ✅ Organiza en `/api`, `/components`, `/pages`.

---

⭐ Si quieres, se puede iniciar el proyecto con la primera versión de `api/tareas.js` y `components/ListaTareas.jsx` como ejemplo base.

