## 📋 Requisitos de la Aplicación

### Controlador de Tareas
- Listar todas las tareas disponibles.✅
- Obtener una tarea específica mediante su `id`.✅
- Crear una nueva tarea recibiendo:✅
  - `titulo` (obligatorio)
  - `descripcion` (obligatorio)
  - `completada` (booleano, opcional)
  - `categoria_id` (obligatorio, debe existir en la tabla de categorías)
- Actualizar una tarea existente mediante su `id`, permitiendo modificar: ✅
  - `titulo`
  - `descripcion`
  - `completada`
  - `categoria_id`
- Eliminar una tarea mediante su `id`, verificando que exista antes de eliminar.✅

### Controlador de Categorías
- Listar todas las categorías disponibles.✅
- Crear una nueva categoría recibiendo nombre ✅
- (Opcional) Actualizar el nombre de una categoría existente.✅
- (Opcional) Eliminar una categoría, asegurando la integridad referencial con las tareas.✅

### Consideraciones Generales
- Todas las operaciones deben manejar errores correctamente (400, 404, 500).
- Validar que los campos obligatorios estén presentes antes de procesar una solicitud.
- Usar status codes HTTP apropiados (`200`, `201`, `400`, `404`, `500`).
- Utilizar consultas parametrizadas para evitar inyección SQL.
