const express = require('express');
const router = express.Router();
const upload = require('../config/upload')

const postController = require('../controller/postController')

router.get('/post/add',postController.abreadd)
router.post('/post/add', upload.single('foto'), postController.add)
router.get('/post/lst',postController.list)
router.post('/post/lst',postController.filtro)
router.get('/post/edt/:id',postController.abreedt)
router.post('/post/edt/:id', upload.single('foto'), postController.edt)
router.get('/post/del/:id',postController.del)

module.exports = router
