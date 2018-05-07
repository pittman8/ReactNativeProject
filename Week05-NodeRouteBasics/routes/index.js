var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', { title: 'NodeRouteBasics Pittman' });
});

router.get('/search', function(req, res) {
    'use strict';
    console.log("Server side Search called.");
    res.send({
        result: 'success foo',
        value: "search result is found",
        errors: "none"
    });
});

router.get('/calculateFeetFromMiles', function(request, response) {
    'use strict';
    response.send({result: request.query.miles * 5280});
});

router.post('/calculateFeetFromMiles', function(request, response) {
    'use strict';
    console.log(request.body);
    response.send({result: request.body.miles * 5280});
});

module.exports = router;
