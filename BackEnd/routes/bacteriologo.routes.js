import {Router} from 'express';
import {getBacteriologo,getBacteriologos,postBacteriologo,deleteBacteriologo,updateBacteriologo} from '../controllers/bacteriologo.controllers.js';

const router = Router();

router.get('/:id',getBacteriologo);
router.get('/',getBacteriologos)
router.post("/",postBacteriologo);
router.delete("/:id",deleteBacteriologo);
router.put("/:id",updateBacteriologo);

 /**
     * @swagger
     * components:
     *  schemas:
     *      Bacteriologo:
     *          type: object
     *          properties:
     *              nombre:
     *                  type: string
     *                  description: nombre del bacteriologo
     *              edad:
     *                  type: string
     *                  description: edad del bacteriologo
     *              email:
     *                  type: string
     *                  description: email del bacteriologo
     *              experiencia:
     *                  type: string
     *                  description: experiencia de bacteriologo
     *              cedula:
     *                  type: string
     *                  description: cedula del bacteriologo
     *              imagen:
     *                  type: string
     *                  description: imagen del bacteriologo
     *              estado:
     *                  type: boolean
     *                  description: estado del bacteriologo
     *          required:
     *              - nombre
     *              - edad
     *              - email
     *              - experiencia
     *              - cedula
     *              - imagen
     *              - estado
     *          example: 
     *              nombre: "Alan Kay"
     *              edad: "12"
     *              email: "alan@gmail.com"
     *              experiencia: "2"
     *              cedula: "312312312"
     *              imagen: "https://i.pinimg.com/564x/d1/c4/8e/d1c48ee64225f0f79ae98caa8558f6d9.jpg"
     *              estado: true
     *              
     */



     /**
     * @swagger
     * /api/bacteriologos/:
     *  get:
     *      summary: Retornar todos los Bacteriologo
     *      tags: [Bacteriologo]
     *      responses:
     *          200:
     *              description: Todos los Bacteriologo encontrados!
     *              content: 
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              $ref: '#/components/schemas/Bacteriologo'
     */

          /**
     * @swagger
     * /api/bacteriologos/{id}:
     *  get:
     *      summary: Retornar todos los Bacteriologo
     *      tags: [Bacteriologo]
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *                type: string
     *            required: true
     *            description: el Bacteriologo id
     *      responses:
     *          200:
     *              description: Todos los Bacteriologo encontrados!
     *              content: 
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              $ref: '#/components/schemas/Bacteriologo'
     */





    /**
     * @swagger
     * /api/bacteriologos/:
     *  post:
     *      summary: Create new Bacteriologo 
     *      tags: [Bacteriologo]
     *      requestBody:
     *          required: true 
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      $ref: '#/components/schemas/Bacteriologo'
     *      responses:
     *          200:
     *              description: Nuevo Bacteriologo fue creado!
     */


        //! DELETE

     /**
     * @swagger
     * /api/bacteriologos/{id}:
     *  delete:
     *      summary: Eliminar un Bacteriologo
     *      tags: [Bacteriologo]
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *                type: string
     *            required: true
     *            description: el Bacteriologo id
     *      responses:
     *          200:
     *              description: Bacteriologo eliminado
     *          404:
     *              description: Bacteriologo no encontrado
     */


          /**
     * @swagger
     * /api/bacteriologos/{id}:
     *  put:
     *      summary: Actualizar un Bacteriologo
     *      tags: [Bacteriologo]
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *                type: string
     *            required: true
     *            description: el Bacteriologo id
     *      requestBody:
     *          required: true 
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      $ref: '#/components/schemas/Bacteriologo'
     *      responses:
     *          200:
     *              description: Bacteriologo Actualizado
     *          404:
     *              description: Bacteriologo no encontrado
     */

export default router;

