import  {Router} from 'express';
import {getPerfil,getPerfilLipidicos,postPerfilLipidico,deletePerfilLipidico,updatePerfilLipidico} from '../controllers/perfilLipidico.controllers.js';

const router = Router();

router.get('/',getPerfilLipidicos);
router.get('/:id',getPerfil);
router.post("/",postPerfilLipidico);
router.delete("/:id",deletePerfilLipidico);
router.put("/:id",updatePerfilLipidico);

/**
     * @swagger
     * components:
     *  schemas:
     *      Perfil Lipidico:
     *          type: object
     *          properties:
     *              idExamenPerfil:
     *                  type: integer
     *                  descripcion: id del examen
     *              glucosa:
     *                  type: string
     *                  description: glucosa del paciente
     *              colesterolTotal:
     *                  type: string
     *                  description: colesterolTotal del paciente
     *              colesterolHDL:
     *                  type: string
     *                  description: colesterolHDL del paciente
     *              colesterolLDL:
     *                  type: string
     *                  description: colesterolLDL de paciente
     *              colesterolVLDL:
     *                  type: string
     *                  description: colesterolVLDL del paciente
     *              triglicerios:
     *                  type: string
     *                  description: triglicerios del paciente
     *              estado:
     *                  type: boolean
     *                  description: estado del Examen
     *          required:
     *              - idExamenPerfil
     *              - glucosa
     *              - colesterolTotal
     *              - colesterolHDL
     *              - colesterolLDL
     *              - colesterolVLDL
     *              - triglicerios
     *              - estado
     *          example: 
     *              idExamenPerfil: 5
     *              glucosa: "46"
     *              colesterolTotal: "15.5"
     *              colesterolHDL: "3.54"
     *              colesterolLDL: "8.250"
     *              colesterolVLDL: "50.0"
     *              triglicerios: "10.0"
     *              estado: true
     *              
     */



     /**
     * @swagger
     * /api/perfilLipidico/:
     *  get:
     *      summary: Retornar todos los Examenes de Perfil Lipidico
     *      tags: [Perfil Lipidico]
     *      responses:
     *          200:
     *              description: Todos los Perfil Lipidico encontrados!
     *              content: 
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              $ref: '#/components/schemas/Perfil Lipidico'
     */

          /**
     * @swagger
     * /api/perfilLipidico/{id}:
     *  get:
     *      summary: Retornar todos los Perfil Lipidico
     *      tags: [Perfil Lipidico]
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *                type: string
     *            required: true
     *            description: el Perfil Lipidico id
     *      responses:
     *          200:
     *              description: Todos los Perfil Lipidico encontrados!
     *              content: 
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              $ref: '#/components/schemas/Perfil Lipidico'
     */





    /**
     * @swagger
     * /api/perfilLipidico/:
     *  post:
     *      summary: Create new Perfil Lipidico 
     *      tags: [Perfil Lipidico]
     *      requestBody:
     *          required: true 
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      $ref: '#/components/schemas/Perfil Lipidico'
     *      responses:
     *          200:
     *              description: Nuevo Perfil Lipidico fue creado!
     */


        //! DELETE

     /**
     * @swagger
     * /api/perfilLipidico/{id}:
     *  delete:
     *      summary: Eliminar un Perfil Lipidico
     *      tags: [Perfil Lipidico]
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *                type: string
     *            required: true
     *            description: el Perfil Lipidico id
     *      responses:
     *          200:
     *              description: Perfil Lipidico eliminado
     *          404:
     *              description: Perfil Lipidico no encontrado
     */


          /**
     * @swagger
     * /api/perfilLipidico/{id}:
     *  put:
     *      summary: Actualizar un Perfil Lipidico
     *      tags: [Perfil Lipidico]
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *                type: string
     *            required: true
     *            description: el Perfil Lipidico id
     *      requestBody:
     *          required: true 
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      $ref: '#/components/schemas/Perfil Lipidico'
     *      responses:
     *          200:
     *              description: Perfil Lipidico Actualizado
     *          404:
     *              description: Perfil Lipidico no encontrado
     */

export default router;

