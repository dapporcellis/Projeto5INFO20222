const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/fotos')
    },
    filename: function (req, file, cb) {
        const prefixounico = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, prefixounico+'-'+file.originalname)
    }
})

const upload = multer({ storage: storage })

module.exports = upload