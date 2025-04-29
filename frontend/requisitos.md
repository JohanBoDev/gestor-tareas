## 📋 Requisitos de la Aplicación Frontend

### Funcionalidades Principales
- Mostrar la lista de todas las tareas disponibles.✅
- Crear una nueva tarea, ingresando:✅
  - `Título` (obligatorio)
  - `Descripción` (obligatorio)
  - `Estado de completada` (opcional, checkbox)
  - `Categoría` (obligatorio, seleccionándola de una lista).
- Editar una tarea existente, permitiendo modificar:
  - `Título`
  - `Descripción`
  - `Estado de completada`
  - `Categoría`
- Eliminar una tarea existente.✅

### Gestión de Categorías
- Mostrar todas las categorías disponibles en el sistema. ✅
- Permitir crear una nueva categoría ingresando solo el nombre.✅
- (Opcional) Editar el nombre de una categoría existente.✅
- (Opcional) Eliminar una categoría, mostrando advertencias si está asociada a tareas.✅ // No le agregue la advertencia

### Consideraciones Generales
- Validar en el frontend que los campos obligatorios estén completos antes de enviar datos.
- Manejar correctamente mensajes de éxito y error para el usuario.
- Usar status HTTP para interpretar las respuestas del servidor:
  - `200 OK` → Mostrar mensajes de éxito.
  - `201 Created` → Mostrar mensajes de creación exitosa.
  - `400 Bad Request` → Mostrar errores de validación.
  - `404 Not Found` → Mostrar mensaje si el recurso no existe.
  - `500 Internal Server Error` → Mostrar error general.
- Mostrar carga (`loading`) mientras se esperan respuestas del servidor.
- Utilizar buenas prácticas de usabilidad (formularios claros, validaciones visibles, navegación fluida).

