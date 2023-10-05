import {Router} from 'express';
import {getPaciente,getPacientes,postPaciente,deletePaciente,updatePaciente} from '../controllers/paciente.controllers.js';

const router = Router();

router.get('/',getPacientes)
router.get('/:id',getPaciente);
router.post("/",postPaciente);
router.delete("/:id",deletePaciente);
router.put("/:id",updatePaciente);

/**
     * @swagger
     * components:
     *  schemas:
     *      Pacientes:
     *          type: object
     *          properties:
     *              nombre:
     *                  type: string
     *                  description: nombre del paciente
     *              edad:
     *                  type: string
     *                  description: edad del paciente
     *              sexo:
     *                  type: string
     *                  description: genero del paciente
     *              direccion:
     *                  type: string
     *                  description: direccion de paciente
     *              celular:
     *                  type: string
     *                  description: celular del paciente
     *              fecha:
     *                  type: string
     *                  description: fecha del paciente
     *              hora:
     *                  type: string
     *                  description: hora del paciente
     *              nombreBacteriologo:
     *                  type: string
     *                  description: nombre del bacteriologo que atiende al paciente
     *              examen:
     *                  type: string
     *                  description: examen del paciente
     *              estado:
     *                  type: boolean
     *                  description: estado del paciente
     *          required:
     *              - nombre
     *              - edad
     *              - sexo
     *              - direccion
     *              - celular
     *              - fecha
     *              - hora
     *              - nombreBacteriologo
     *              - examen
     *              - estado
     *          example: 
     *              nombre: juan
     *              edad: 12
     *              sexo: Hombre
     *              direccion: mi casa
     *              celular: 3184606257
     *              fecha: 2023-08-10
     *              hora: 12:15
     *              nombreBacteriologo: juan
     *              examen: Cuadro Hematico
     *              estado: true
     *              
     */



     /**
     * @swagger
     * /api/pacientes/:
     *  get:
     *      summary: Retornar todos los Pacientes
     *      tags: [Pacientes]
     *      responses:
     *          200:
     *              description: Todos los Pacientes encontrados!
     *              content: 
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              $ref: '#/components/schemas/Pacientes'
     */

          /**
     * @swagger
     * /api/pacientes/{id}:
     *  get:
     *      summary: Retornar todos los Pacientes
     *      tags: [Pacientes]
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *                type: string
     *            required: true
     *            description: el Pacientes id
     *      responses:
     *          200:
     *              description: Todos los Pacientes encontrados!
     *              content: 
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              $ref: '#/components/schemas/Pacientes'
     */





    /**
     * @swagger
     * /api/pacientes/:
     *  post:
     *      summary: Create new Pacientes 
     *      tags: [Pacientes]
     *      requestBody:
     *          required: true 
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      $ref: '#/components/schemas/Pacientes'
     *      responses:
     *          200:
     *              description: Nuevo Pacientes fue creado!
     */


        //! DELETE

     /**
     * @swagger
     * /api/pacientes/{id}:
     *  delete:
     *      summary: Eliminar un Pacientes
     *      tags: [Pacientes]
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *                type: string
     *            required: true
     *            description: el Pacientes id
     *      responses:
     *          200:
     *              description: Pacientes eliminado
     *          404:
     *              description: Pacientes no encontrado
     */


          /**
     * @swagger
     * /api/pacientes/{id}:
     *  put:
     *      summary: Actualizar un Pacientes
     *      tags: [Pacientes]
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *                type: string
     *            required: true
     *            description: el Pacientes id
     *      requestBody:
     *          required: true 
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      $ref: '#/components/schemas/Pacientes'
     *      responses:
     *          200:
     *              description: Pacientes Actualizado
     *          404:
     *              description: Pacientes no encontrado
     */

export default router;

