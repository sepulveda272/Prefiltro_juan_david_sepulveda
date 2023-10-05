import {Router} from 'express';
import {getGlisemiia,getGlisemias,postGlisemia,deleteGlisemia,updateGlisemia} from '../controllers/glisemia.controllers.js';

const router = Router();

router.get('/',getGlisemias);
router.get('/:id',getGlisemiia);
router.post("/",postGlisemia);
router.delete("/:id",deleteGlisemia);
router.put("/:id",updateGlisemia);

/**
     * @swagger
     * components:
     *  schemas:
     *      Glisemia:
     *          type: object
     *          properties:
     *              idExamenGlisemia:
     *                  type: integer
     *                  descripcion: id del examen
     *              glisemiaBasal:
     *                  type: string
     *                  description: glisemiaBasal del paciente
     *              ingestion:
     *                  type: string
     *                  description: ingestion del paciente
     *              estado:
     *                  type: boolean
     *                  description: estado del Examen
     *          required:
     *              - idExamenGlisemia
     *              - glisemiaBasal
     *              - ingestion
     *              - estado
     *          example:
     *              idExamenGlisemia: 2
     *              glisemiaBasal: "110 mg/dL"
     *              ingestion: "Prueba"
     *              estado: true
     *              
     */



     /**
     * @swagger
     * /api/glisemia/:
     *  get:
     *      summary: Retornar todos los Examenes de Glisemia
     *      tags: [Glisemia]
     *      responses:
     *          200:
     *              description: Todos los Glisemia encontrados!
     *              content: 
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              $ref: '#/components/schemas/Glisemia'
     */

          /**
     * @swagger
     * /api/glisemia/{id}:
     *  get:
     *      summary: Retornar todos los Glisemia
     *      tags: [Glisemia]
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *                type: string
     *            required: true
     *            description: el Glisemia id
     *      responses:
     *          200:
     *              description: Todos los Glisemia encontrados!
     *              content: 
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              $ref: '#/components/schemas/Glisemia'
     */





    /**
     * @swagger
     * /api/glisemia/:
     *  post:
     *      summary: Create new Glisemia 
     *      tags: [Glisemia]
     *      requestBody:
     *          required: true 
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      $ref: '#/components/schemas/Glisemia'
     *      responses:
     *          200:
     *              description: Nuevo Glisemia fue creado!
     */


        //! DELETE

     /**
     * @swagger
     * /api/glisemia/{id}:
     *  delete:
     *      summary: Eliminar un Glisemia
     *      tags: [Glisemia]
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *                type: string
     *            required: true
     *            description: el Glisemia id
     *      responses:
     *          200:
     *              description: Glisemia eliminado
     *          404:
     *              description: Glisemia no encontrado
     */


          /**
     * @swagger
     * /api/glisemia/{id}:
     *  put:
     *      summary: Actualizar un Glisemia
     *      tags: [Glisemia]
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *                type: string
     *            required: true
     *            description: el Glisemia id
     *      requestBody:
     *          required: true 
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      $ref: '#/components/schemas/Glisemia'
     *      responses:
     *          200:
     *              description: Glisemia Actualizado
     *          404:
     *              description: Glisemia no encontrado
     */

export default router;

