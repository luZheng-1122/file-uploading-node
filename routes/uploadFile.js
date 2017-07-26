/**
 * Created by zhenglu on 26/07/2017.
 */
var express = require('express');
var router = express.Router();
var multer  = require('multer');
var fileName;

//use multer to upload files
//from: https://github.com/expressjs/multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')

    },
    filename: function (req, file, cb) {

        fileName = file.originalname;
        cb(null, file.originalname)

        //Date.now() + '-' +
    }
});

var upload = multer({ storage: storage }).single('singleFile');

router.post('/', function(req, res, next) {

    console.log(req.file);
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return
        }

//todo: need global port number!
        res.json({
            success: true,
            fileName: fileName,
            path: "http://localhost:3000/uploads/" + fileName
        });

        // Everything went fine
    })
});

module.exports = router;
