# places-express-api

Esta es una aplicación de Node.js con Express.

## Requisitos previos

- Node.js: Asegúrate de tener Node.js instalado en tu máquina. Puedes descargarlo desde https://nodejs.org.

## Instalación

1. Clona este repositorio o descárgalo como archivo ZIP.

```bash
# clone repository
$ git clone https://github.com/PepVal/places-express-api.git
```

2. Navega hasta la carpeta del proyecto en tu terminal.

```bash
# navigate into directory
$ cd places-express-api
```

3. Ejecuta el siguiente comando para instalar las dependencias:

```bash
# install dependencias with NPM
$ npm install
```

## Uso

1. Ejecuta el siguiente comando para iniciar la aplicación:

```bash
# start server
$ npm run start
```

2. Abre tu navegador y visita `http://localhost:3000` para ver la aplicación en funcionamiento.

## Estructura de archivos

- `files/`: En este directorio ser encuentran los archivos estáticos (imágenes, videos, audios) que se utilizan en la aplicación de android.
- `src/`: Bajo este directorio se encuentra todo el código fuente de la aplicación (servidor).
- `src/server.ts`: Archivo principal de la aplicación donde se configura Express, los controladores y middlewares.
- `src/controllers/`: Directorio que contiene los controladores usados en la aplicación.
- `src/services/`: Directorio que contiene los servicios usados por los controladores en la aplicación.
- `src/fake-data/`: Directorio que contiene los datos "falsificados" o "simulados".
- `src/middlewares/`: Directorio que contiene los diferentes middlewares que se utilizan en la aplicación.

## Contribución

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork y enviar tus pull requests.

## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
