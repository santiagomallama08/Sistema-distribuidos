const express = require('express');
const cors = require('cors');
/**
 * @class Server
 * Clase servidor que inicia el servicio de express
 */
class Server {
    constructor() {
        this.app = express();

        // Usar el puerto proporcionado por la variable de entorno o por defecto 3008
        this.port = 3008;

        this.path = '/api/';
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // Usar express.json() para procesar las peticiones JSON
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        // Asegúrate de que el archivo de rutas esté exportado correctamente

            this.app.use('/pagos', require('../routes/pago.routes'));
        
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
