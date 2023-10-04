const {Router} = require('express');
const {getPaciente,getPacientes,postPaciente,deletePaciente,updatePaciente} = require('../controllers/paciente.controllers.js');

const router = Router();

router.get('/',getPacientes)
router.get('/:id',getPaciente);
router.post("/",postPaciente);
router.delete("/:id",deletePaciente);
router.put("/:id",updatePaciente);


module.exports = router;

