var express = require('express');
var router = express.Router();
var controller = require('../controllers/mainController');

/* GET home page. */
router.get('/', controller.mainPage);

// ajax query
router.get('/getFilesList', controller.getFilesList);

module.exports = router;
