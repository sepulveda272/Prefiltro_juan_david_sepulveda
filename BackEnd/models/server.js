import express from 'express';
import cors from 'cors';
import {dbConnection} from '../database/config.js';
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from '../swaggerConfig.js';

import pacientes from '../routes/pacientes.routes.js';
import bacteriologo from '../routes/bacteriologo.routes.js';
import cuadroHematico from '../routes/cuadroHematico.routes.js';
import glisemia from '../routes/glisemia.routes.js';
import perfilLipidico from '../routes/perfilLipidico.routes.js';
import search from '../routes/search.routes.js';

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.pacientesPath = "/api/pacientes";
        this.bacteriologosPath = "/api/bacteriologos";
        this.cuadroHematicoPath = "/api/cuadroHematico";
        this.glisemiaPath = "/api/glisemia";
        this.perfilLipidicoPath = "/api/perfilLipidico";
        this.searchPath = "/api/search";
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
        this.app.use(this.pacientesPath, pacientes);
        this.app.use(this.bacteriologosPath, bacteriologo);
        this.app.use(this.cuadroHematicoPath, cuadroHematico);
        this.app.use(this.glisemiaPath, glisemia);
        this.app.use(this.perfilLipidicoPath, perfilLipidico);
        this.app.use(this.searchPath, search);
        this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`estamos en el puerto ${this.port}`);
        })
    }
}

export default Server;