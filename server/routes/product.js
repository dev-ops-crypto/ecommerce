const express = require('express');
const router = express.Router();
const  {Product} = require('../models/Product')
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
router.post("/uploadProduct", auth, (req, res) => {

    //save all the data we got from the client into the DB 
    const product = new Product(req.body)

    product.save((err) => {
        if (err) return res.status(400).json({
            success: false,
            err
        })
        return res.status(200).json({
            success: true
        })
    })

});
//=================================
//             User
//=================================

router.post("/Uploadimage", auth, (req, res) => {
    //after getting the image from client
    upload(req , res , err => {
        if(err){
            return res.json({success: false ,err})
        }
        return res.json({success:true , image:res.req.file.path , fileName: res.req.file.fileName})
    })

    //save inside the node server
    //multer
});
//======================================
//              get Product
//======================================
router.post("/getProducts", auth, (req, res) => {

    //save all the data we got from the client into the DB 
   Product.find()
   .exec((err ,product) =>  {
       if(err){
            return res.status(400).json(
            { success:false ,err })
            res.status(200).json(
            { success:true , products }
          )
       }else{

       }
   })
});
module.exports = router;