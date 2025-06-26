# Como preparar la página web (con CMD)

0.- Requerimientos y preparativos:
- Se debe tener Node.js instalado para poder correr comandos como "npm" y "node", esenciales para lograr correr la página web sin mucho problema, y se debe de inicializar la base de datos SQL "datos" de antemano, así para evitar el error de "ER_BAD_DB_ERROR" debido a intentar acceder una base de datos que no existe o no ha sido inicializada.

1.- Preparación de dependencias:
- En la carpeta raíz de la página, se debe ejecutar el comando "npm init -y", para preparar un package.json donde se van a determinar los paquetes de los cuales dependerá la página web.

2.- Instalación de módulos necesarios:
- Tras haber creado e inicializado el package.json, se ejecuta el comando "npm install express mysql2 cors", instalando todos los módulos necesarios (entre ellos, CORS, mySQL y el framework Express), creandose la carpeta "node_modules" los cuales son necesarios para que funcione la página web y para que el script del servidor pueda acceder a la base de datos SQL y recibir los datos de allí, las dependencias inmediatamente serán escritas en el package.json antes mencionado y también se creará un package_lock.json para finalizar la escritura de dependencias.

3.- Correr:
- Una vez finalizada la instalación de los módulos, se debe correr el comando "cd backend" para mover la terminal hacia el backend de la página, y finalmente correr el comando "node server.js" para levantar la página web.

4.- Visitar:
- Ya inicializada y estando de pie la página web, se debe visitar http://localhost:3000 para visualizar la página levantada.

5.- Extras:
- Se pueden revisar los datos de la base a través de http://localhost:3000/api/datos en Thunder Client, viendosé en forma de un archivo .JSON, el cual es usado para poder acceder a los datos contenidos.

En caso de errores:
- "ER_BAD_DB_ERROR": La base de datos SQL no ha sido inicializada, se debe correr el script SQL donde se contienen los datos para inicializar la base de datos sin problemas.

- "ER_ACCESS_DENIED_ERROR": La contraseña usada para acceder al servidor SQL es incorrecta, y se debe arreglar desde el script de "server.js".