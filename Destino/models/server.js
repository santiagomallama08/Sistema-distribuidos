const express = require('express');
const cors= require('cors')

/**
 * @class Server
 * Clase servidor que inicia el servicio de express
 */
class Server {
    constructor() {
        this.app = express();
        this.port = 3007;

        this.path = '/api/';
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // Middleware para manejar JSON
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        // Asegúrate de que el archivo de rutas exista
        this.app.use('/destino', require('../routes/destino.routes'));
    }

    listen() {
        // Iniciar el servidor en el puerto configurado
        this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto: ${this.port}`);
        });
    }
}


// Instanciar el servidor y llamar a listen para asegurarse de que el servidor se quede en ejecución
const server = new Server();
server.listen();

module.exports = Server;

