# Proyecto de Gestión de Tipos y Propiedades

Este proyecto es una interfaz frontend para gestionar tipos (persona, organización, evento, lugar, etc.) y propiedades (nombre, fecha de nacimiento, estado civil, dirección, color, etc.).

## Tecnologías
- **Frontend:** Next.js v15 y Material UI.
- **Repositorio de código:** GitHub.
- **Despliegue:** Render (plan Hobby) o similar.

## Funcionalidades Principales
### Autenticación y Roles
- **Inicio de Sesión:** Formulario para iniciar sesión y obtener un token JWT.
- **Control de Acceso:** Mostrar/ocultar botones y funcionalidades basadas en el rol del usuario.
  - **Admin:** Puede crear, editar y eliminar tipos y propiedades.
  - **User:** Solo puede ver tipos y propiedades (acceso de solo lectura).

### Tipos
- **Listado de Tipos:** Tabla con los tipos disponibles.
- **Creación de Tipos:** Formulario en un Drawer con los campos: nombre, descripción y propiedades asignadas.
- **Edición de Tipos:** Formulario prellenado en un Drawer.
- **Eliminación de Tipos:** Confirmación en un Drawer o diálogo simple.

### Propiedades
- **Listado de Propiedades:** Tabla con las propiedades disponibles.
- **Creación de Propiedades:** Formulario en un Drawer con los campos: nombre y tipo de propiedad.
- **Edición de Propiedades:** Formulario prellenado en un Drawer.
- **Eliminación de Propiedades:** Confirmación en un Drawer o diálogo simple.

### Conexión con el Backend
- **Consumo de APIs:** Se usó `fetch` para peticiones HTTP.
- **Gestión del Token JWT:** Almacenar en localStorage o cookie y enviarlo en las peticiones.

### Diseño y Estilo
- **Material UI:** Uso de componentes predefinidos (Tabla, Formulario, Drawer).
- **Responsive Design:** Adaptación a móviles y escritorio.

## Instalación y Configuración
### Clonación del Repositorio
```sh
# Clonar el repositorio
git clone https://github.com/mariormolano/prtftx-frontend.git
cd prtftx-frontend
```

### Instalación de Dependencias
```sh
# Instalar las dependencias
npm install
```

### Configuración de Variables de Entorno
Crear un archivo `.env` en la raíz del proyecto y añadir la variables:
```env
BACKEND_URL=http://localhost:4000/api
```

### Ejecución en Local
```sh
# Ejecutar el servidor de desarrollo
npm run dev
```
La aplicación estará disponible en `http://localhost:3000`.


## Arquitectura

Para este proyecto use Arquitectura de Modulos Simples, que permite dar una buena estructura sobretodo al frontend.

**app** (con las rutas de dashboard y login)
**components**  (elemntos del UI)
**features** (Modelos por caracteristica)
**libs** (Mockups usados para pruebas antes de conectar el backend)
**types** (tipos de datos)

## Conexión con el backend

la conexión se hizo con medio de servisios desde servidor 'use server', lo hace efectivo para enmascarar datos suseptibles, ademas se usó el gestor de estados Exome, por su velocidad, liviano y simplicidad

