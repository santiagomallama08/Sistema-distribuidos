const express = require('express');
const cors = require('cors')

/**
 * @class Server
 * clase servidor que inicia el servicio de express
 */
class Server{

    constructor(){
        this.app = express();
        this.port = 3000;
        this.path = '/api/';
        this.middlewares();
        this.routes();
    }
    

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/users', require('../routes/user.routes'));
        this.app.use('/persons', require('../routes/persons.routes'));
    }

   

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto: ${this.port}`); 
        });
    }
}

module.exports = Server;