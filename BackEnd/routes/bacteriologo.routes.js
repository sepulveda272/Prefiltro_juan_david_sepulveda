const {Router} = require('express');
const {getBacteriologo,getBacteriologos,postBacteriologo,deleteBacteriologo,updateBacteriologo} = require('../controllers/bacteriologo.controllers.js');

const router = Router();

router.get('/:id',getBacteriologo);
router.get('/',getBacteriologos)
router.post("/",postBacteriologo);
router.delete("/:id",deleteBacteriologo);
router.put("/:id",updateBacteriologo);


module.exports = router;

