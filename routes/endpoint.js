var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
    res.render('index', {
        title: 'WTOS Examination System',
        SOCKET_IO_URL: process.env.SOCKET_IO_URL
    });
});
module.exports = router;
