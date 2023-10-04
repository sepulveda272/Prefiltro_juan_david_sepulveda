const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.js');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.pacientesPath = "/api/pacientes";
        this.bacteriologosPath = "/api/bacteriologos";
        this.connectDB();
        this.middleware();
        this.routes();
    }

    async connectDB(){
        await dbConnection();
    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.pacientesPath, require('../routes/pacientes.routes.js'));
        this.app.use(this.bacteriologosPath, require('../routes/bacteriologo.routes.js'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`estamos en el puerto ${this.port}`);
        })
    }
}

module.exports = Server;