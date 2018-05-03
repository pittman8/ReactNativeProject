var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', { title: 'NodeRouteBasics Pittman' });
});

router.get('/search', function(req, res, next) {
    'use strict';
    console.log("Server side Search called.");
    res.send({
        result: 'success foo',
        value: "search result is found",
        errors: "none"
    });
});

module.exports = router;
