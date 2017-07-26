/**
 * Created by zhenglu on 26/07/2017.
 */
var fs = require('fs');
var http = require("http");

module.exports.mainPage = function (req,res) {
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
        res.render('mainPage', { filesList: filesList });
    });
}

module.exports.getFilesList = function (req,res) {
    var filesName = new Array;

    fs.readdir('public/uploads', function (err,files) {
        //i = 1 is because the first object of files, or 'files[0]' is '.DSstore'
        for(var i = 1; i < files.length; i++){
            filesName.push(files[i]);
        }

        res.send(filesName);
    });
}