# Aplicación de ejemplo en Node.js

![Versión](https://img.shields.io/badge/Versión-0.2.0-blue)

Proyecto Web en `Node.js` desarrollado para el Instituto Profesional `Santo Tomás de Valdivia`, diseñado para demostrar los contenidos de la asignatura de `Programación Web`. Este proyecto está desarrollado en `JavaScript`, en el lado del cliente y en el lado del servidor utilizando `Node.js`.

Esta versión, el proyecto solo sirve páginas estáticas, el `home` y `about`, es solo para mostrar los componentes básicos de una aplicación en `Node.js` que usa `backend` y `frontend`.<br><br>
El proyecto implementa el uso de `.env`, un archivo de texto utilizado para definir variables de entorno en aplicaciones de software. Estas variables se utilizan típicamente para configurar aspectos sensibles de la aplicación, como credenciales de bases de datos, claves de API y otras configuraciones específicas del entorno.

También hace uso de `package.json`, un componente esencial en proyectos `Node.js y JavaScript`. Este archivo de configuración proporciona información sobre el proyecto, incluidas las dependencias necesarias para su funcionamiento.

## Tabla de Contenidos
-[Lo Nuevo](#lo-nuevo)<br>
-[Instalación](#instalación)<br>
-[Iniciar Servidor Web Local de la Aplicación](#iniciar-servidor-web-local-de-la-aplicación)<br>
-[Uso](#uso)<br>

## Lo Nuevo

Esta versión, contiene `CSS` en el `frontend`. Se importa una fuenta local<br>
Se completó parte del `backend`, pero solo la estructura de carpetas y archivos en blanco.<br>

## Instalación

La instalación de las dependencias se realiza solo una sola vez.<br>
Sigue estos pasos para instalar el proyecto en tu entorno local:

1. **Clonar el repositorio:**

```sh
git clone https://github.com/alkemistin/aplicacion-node.git
cd aplicacion-node
```
2. **Instalación de Dependencias:**

Desde la raíz del proyecto:
```sh
npm install express dotenv
```
Esto instalará todas las dependencias necesarias para ejecutar tu aplicación correctamente.

`express`: Framework web para <b>Node.js</b> que maneja las rutas y vistas.<br>
`dotenv`: Módulo para cargar variables de entorno desde un archivo .env.<br>  

En el archivo `package.json` encontrado en la raíz del proyecto, se detalla la versión que se instalará para cada dependencia.
 
3. **Configuración de Variables de Entorno:**

Copia el archivo `.env.example` ubicado en la raíz del proyecto y renómbralo a `.env`. Luego, edita este archivo con tus propios valores para las variables de entorno necesarias:

```dotenv
APP_NAME = Nombre-de-la-aplicacion
SERVER_PORT = el-puerto-que-usara-el-servidor-web-local
```

## Iniciar Servidor Web Local de la Aplicación
    
Una vez instaladas las dependencias y configuradas las variables de entorno, puedes iniciar el servidor web local ejecutando el siguiente comando desde la raíz del proyecto:
```sh
npm start
```

## Uso

Una vez que el servidor web local de la aplicación esté en funcionamiento, para acceder al sitio de los usuarios no autenticados (Sitio Frontend), simplemente ingresa la URL `http://localhost:3000` o `http://127.0.0.1:3000` en tu navegador web, esto suponiendo que configuraste el puerto `3000`.

