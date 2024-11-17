const express = require('express');
const cors = require('cors');

/**
 * @class Server
 * Clase servidor que inicia el servicio de express
 */
class Server {
    constructor() {
        this.app = express();

        // Usar el puerto proporcionado por la variable de entorno o un valor predeterminado
        this.port = 3000;

        this.path = '/api/';
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // Usar CORS para permitir solicitudes de diferentes orígenes
        this.app.use(cors());
        // Usar express.json() para procesar las peticiones JSON
        this.app.use(express.json());
    }

    routes() {
    
            this.app.use('/users', require('../routes/user.routes'));
            this.app.use('/persons', require('../routes/persons.routes'));
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto: ${this.port}`); 
        });
    }

   
}

// Instanciar el servidor y llamar a listen para asegurarse de que el servidor se quede en ejecución
const server = new Server();
server.listen();

module.exports = Server;
