const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
    User
} = require("../models/User");

const {
    auth
} = require("../middleware/auth");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png' || ext !== '.mp4') {
            return cb(res.status(400).end('only jpg, png ,mp4 are allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file")
//=================================
//              product
//=================================
 router.post("/uploadImage", auth, (req, res) => {

     upload(req, res, err => {
         if (err) {
             return res.json({
                 success: false,
                 err
             })
         }
         return res.json({
             success: true,
             image: res.req.file.path,
             fileName: res.req.file.filename
         })
     })

 });

//=================================
//             User
//=================================

router.post("/Uploadimage", auth, (req, res) => {
    //after getting the image from client
    //save inside the node server
    //multer
});
module.exports = router;