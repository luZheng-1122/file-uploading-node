var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    var filesList;
    var filesName = new Array;
    var filesPath = new Array;

    //get all file name from target directory
  fs.readdir('public/uploads', function (err,files) {
      //i = 1 is because the first object of files, or 'files[0]' is '.DSstore'
      for(var i = 1; i < files.length; i++){
        filesName.push(files[i]);
        filesPath.push('http://localhost:3000/uploads/' + files[i]);
      }

      filesList = {filesName: filesName, filesPath: filesPath};
      console.log(filesList);
      res.render('index', { filesList: filesList });
  });

});

router.get('/getFilesList', function (req,res,next) {

    var filesName = new Array;

    fs.readdir('public/uploads', function (err,files) {
        //i = 1 is because the first object of files, or 'files[0]' is '.DSstore'
        for(var i = 1; i < files.length; i++){
            filesName.push(files[i]);
        }

        res.send(filesName);
    });
});

module.exports = router;
