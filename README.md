# 🌋 Proyecto Vulcano (Frontend)
### **Aprendizaje Interactivo a Través de la Gamificación**

**Vulcano App** es una plataforma educativa innovadora diseñada para transformar el aprendizaje del desarrollo de software en una experiencia lúdica e interactiva. Al integrar dinámicas de gamificación, permitimos que los estudiantes consoliden conceptos técnicos del primer semestre mientras fortalecen su lógica de programación en un entorno divertido y desafiante.

---

## 🎯 Objetivos del Proyecto

*   **Objetivo General:** Implementar una interfaz de usuario moderna y dinámica que conecte con la **Vulcano API**, ofreciendo una experiencia académica gamificada.
*   **Enfoque Educativo:** Facilitar la práctica de lógica de programación mediante desafíos interactivos, un editor de código en tiempo real y sistemas de retroalimentación (reseñas).

---

## 🛠️ Tecnologías y Versiones

Este proyecto está construido con las últimas tecnologías del ecosistema web para asegurar rendimiento y escalabilidad:

| Herramienta | Versión | Descripción |
| :--- | :--- | :--- |
| **Node.js** | >= 18.x | Entorno de ejecución |
| **React** | 19.2.0 | Biblioteca base de la interfaz |
| **Vite** | 7.3.1 | Herramienta de compilación ultra rápida |
| **Tailwind CSS**| 4.2.1 | Framework de estilos utilitarios |
| **JavaScript** | ES6+ | Lógica de la aplicación |

---

## 🚀 Instalación y Ejecución Local

Sigue estos pasos para poner en marcha el proyecto en tu entorno local:

### 1. Requisitos Previos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) y un gestor de paquetes (NPM viene con Node).

### 2. Clonar el repositorio
```bash
git clone https://github.com/MarioMunera1993/vulcano-app.git
cd vulcano-app
```

### 3. Instalar dependencias
```bash
npm install
```

### 4. Lanzar el servidor de desarrollo
```bash
npm run dev
```
> La aplicación estará disponible en `http://localhost:5173` (o el puerto indicado por Vite).

---

## 🧠 Características Técnicas (V2.0)

La versión actual incluye módulos avanzados de interacción con el usuario:

*   **Gestión de Reseñas (CRUD):** Interacción completa con API REST para crear, editar y eliminar comentarios.
*   **Módulo de Desafíos:** Entorno de práctica con editor de código integrado y ejecución en tiempo real mediante `eval()` (en entorno controlado).
*   **Interactividad Avanzada:** Uso de `IntersectionObserver` para video-aprendizaje y animaciones dinámicas con Tailwind CSS.
*   **Seguridad y Validación:** Sanitización de entradas (Prevención XSS) y validaciones mediante expresiones regulares.
*   **Arquitectura Modular:** Organización de scripts por responsabilidad para facilitar el mantenimiento.

---

## 📂 Estructura del Proyecto

La organización de carpetas sigue un patrón modular para facilitar el escalamiento y mantenimiento:

```text
src/
├── assets/      # Recursos estáticos (Imágenes, SVGs, fuentes).
├── components/  # Componentes reutilizables de la interfaz.
├── helpers/     # Funciones de utilidad y lógica auxiliar.
├── pages/       # Vistas principales de la aplicación.
├── router/      # Configuración de rutas y navegación.
├── services/    # Lógica de comunicación con el API (peticiones Fetch).
├── App.jsx      # Componente raíz.
├── main.jsx     # Punto de entrada de React.
└── index.css    # Estilos globales de la aplicación.
```

---

## 🔗 Conexión con el Backend (API)

Este frontend se comunica con la **[Vulcano API](https://github.com/MarioMunera1993/vulcano-api-grupo-1)**, desarrollada en **Java Spring Boot**.
*   **Arquitectura:** Cliente-Servidor mediante API REST.
*   **Persistencia:** Los datos se gestionan a través de la API en PostgreSQL/H2.

---

## 👥 Integrantes del Equipo

| Nombre | Rol principal | Usuario GitHub |
| :--- | :--- | :--- |
| Mario Múnera | Líder / Backend | [@MarioMunera1993](https://github.com/MarioMunera1993) |
| Albany Luciani | Frontend Lead | [@albanyluciani1](https://github.com/albanyluciani1) |
| Roque Aldana | Backend / DB Specialist | [@Julio28012020](https://github.com/Julio28012020) |
| Julio Correa | QA / Tester | [@Jcorrea24](https://github.com/Jcorrea24) |
| Sergio Montoya | UI/UX Designer | [@SerelbochaD3773](https://github.com/SerelbochaD3773) |

---

## 📄 Licencia
Este proyecto se encuentra bajo la licencia MIT.