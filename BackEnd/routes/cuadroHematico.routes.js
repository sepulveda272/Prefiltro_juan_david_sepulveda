import {Router} from 'express';
import {getCuadroHemaricos,postCuadroHemarico,deleteCuadroHemarico,updateCuadroHematico, getCuadro} from '../controllers/cuadroHematico.controllers.js';

const router = Router();

router.get('/',getCuadroHemaricos);
router.get('/:id',getCuadro)
router.post("/",postCuadroHemarico);
router.delete("/:id",deleteCuadroHemarico);
router.put("/:id",updateCuadroHematico);

/**
     * @swagger
     * components:
     *  schemas:
     *      Cuadro Hematicos:
     *          type: object
     *          properties:
     *              idExamenCuadro:
     *                  type: integer
     *                  descripcion: id del examen
     *              hematocrito:
     *                  type: string
     *                  description: hematocrito del paciente
     *              hemoglobina:
     *                  type: string
     *                  description: hemoglobina del paciente
     *              eritrocitos:
     *                  type: string
     *                  description: eritrocitos del paciente
     *              leucositos:
     *                  type: string
     *                  description: leucositos de paciente
     *              neutrofilos:
     *                  type: string
     *                  description: neutrofilos del paciente
     *              eosinofilos:
     *                  type: string
     *                  description: eosinofilos del paciente
     *              plaquetas:
     *                  type: string
     *                  description: plaquetas del paciente
     *              proteinasTotales:
     *                  type: string
     *                  description: proteinasTotales del paciente
     *              estado:
     *                  type: boolean
     *                  description: estado del Examen
     *          required:
     *              - idExamenCuadro
     *              - hematocrito
     *              - hemoglobina
     *              - eritrocitos
     *              - leucositos
     *              - neutrofilos
     *              - eosinofilos
     *              - linfocitos
     *              - plaquetas
     *              - proteinasTotales
     *              - estado
     *          example: 
     *              idExamenCuadro: 4
     *              hematocrito: "42"
     *              hemoglobina: "13.5"
     *              eritrocitos: "3.54"
     *              leucositos: "8.400"
     *              neutrofilos: "56.0"
     *              eosinofilos: "4.0"
     *              linfocitos: "40.0"
     *              plaquetas: "256.000"
     *              proteinasTotales: "72"
     *              estado: true
     *              
     */



     /**
     * @swagger
     * /api/cuadroHematico/:
     *  get:
     *      summary: Retornar todos los Examenes de Cuadro Hematicos
     *      tags: [Cuadro Hematicos]
     *      responses:
     *          200:
     *              description: Todos los Cuadro Hematicos encontrados!
     *              content: 
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              $ref: '#/components/schemas/Cuadro Hematicos'
     */

          /**
     * @swagger
     * /api/cuadroHematico/{id}:
     *  get:
     *      summary: Retornar todos los Cuadro Hematicos
     *      tags: [Cuadro Hematicos]
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *                type: string
     *            required: true
     *            description: el Cuadro Hematicos id
     *      responses:
     *          200:
     *              description: Todos los Cuadro Hematicos encontrados!
     *              content: 
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              $ref: '#/components/schemas/Cuadro Hematicos'
     */





    /**
     * @swagger
     * /api/cuadroHematico/:
     *  post:
     *      summary: Create new Cuadro Hematicos 
     *      tags: [Cuadro Hematicos]
     *      requestBody:
     *          required: true 
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      $ref: '#/components/schemas/Cuadro Hematicos'
     *      responses:
     *          200:
     *              description: Nuevo Cuadro Hematicos fue creado!
     */


        //! DELETE

     /**
     * @swagger
     * /api/cuadroHematico/{id}:
     *  delete:
     *      summary: Eliminar un Cuadro Hematicos
     *      tags: [Cuadro Hematicos]
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *                type: string
     *            required: true
     *            description: el Cuadro Hematicos id
     *      responses:
     *          200:
     *              description: Cuadro Hematicos eliminado
     *          404:
     *              description: Cuadro Hematicos no encontrado
     */


          /**
     * @swagger
     * /api/cuadroHematico/{id}:
     *  put:
     *      summary: Actualizar un Cuadro Hematicos
     *      tags: [Cuadro Hematicos]
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *                type: string
     *            required: true
     *            description: el Cuadro Hematicos id
     *      requestBody:
     *          required: true 
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      $ref: '#/components/schemas/Cuadro Hematicos'
     *      responses:
     *          200:
     *              description: Cuadro Hematicos Actualizado
     *          404:
     *              description: Cuadro Hematicos no encontrado
     */

export default router;

