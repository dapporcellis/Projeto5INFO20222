const express = require('express');
const router = express.Router();
const upload = require('../config/upload')

const usuarioController = require('../controller/usuarioController')

router.get('/usuario/add',usuarioController.abreadd)
router.post('/usuario/add', upload.single('foto'), usuarioController.add)
router.get('/usuario/lst',usuarioController.list)
router.post('/usuario/lst',usuarioController.filtro)
router.get('/usuario/edt/:id',usuarioController.abreedt)
router.post('/usuario/edt/:id', upload.single('foto'), usuarioController.edt)
router.get('/usuario/del/:id',usuarioController.del)

module.exports = router
