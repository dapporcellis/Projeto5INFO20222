const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/fotos/' })

const usuarioController = require('../controller/usuarioController')

router.get('/usuario/add',usuarioController.abreadd)
router.post('/usuario/add', upload.single('foto'), usuarioController.add)
router.get('/usuario/lst',usuarioController.list)
router.post('/usuario/lst',usuarioController.filtro)
router.get('/usuario/edt/:id',usuarioController.abreedt)
router.post('/usuario/edt/:id',usuarioController.edt)
router.get('/usuario/del/:id',usuarioController.del)

module.exports = router
