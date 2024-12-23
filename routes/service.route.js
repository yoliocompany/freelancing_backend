const express = require('express');
const { createService, getServices, getMyServices , getServiceById, editService, deleteService } = require('../controllers/service.controller');
const router = express.Router();

const multer = require('multer');

const myStorage = multer.diskStorage({

    destination: './public',
    filename: (req, file, cb)=>{
        let fileName = Date.now() + '.' + file.mimetype.split('/')[1];
        req.body.image = fileName;
        cb(null, fileName);
    }
})

const upload = multer({ storage: myStorage });


router.post('/create', upload.single('image') , createService);
router.get('/', getServices);
router.get('/my/:id', getMyServices);
router.get('/:id', getServiceById);
router.put('/:id', upload.single('image'), editService);
router.delete('/:id', deleteService);

module.exports = router;
