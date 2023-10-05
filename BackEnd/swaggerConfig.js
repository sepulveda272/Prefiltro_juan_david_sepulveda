// swaggerConfig.js

import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Bacteriologia',
      version: '3.0.0',
      description: 'Documentación de la API de Bacteriologia_RVG',
    },
    servers:[
        {
            url: "http://localhost:5000"
        }
    ]
  },
  apis: ['./routes/bacteriologo.routes.js', './routes/cuadroHematico.routes.js', './routes/glisemia.routes.js', './routes/pacientes.routes.js', './routes/perfilLipidico.routes.js'], // Rutas de tus controladores
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;