var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', { title: 'NodeRouteBasics Pittman' });
});

router.get('/getFeetInMile', function(request, result) {
    'use strict';
    result.send({
        result: '5280',
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

router.get('/calculateCircumference', function(request, response) {
    'use strict';
    response.send({result: 2 * request.query.radius * Math.PI});
});

router.post('/calculateCircumference', function(request, response) {
    'use strict';
    console.log(request.body);
    response.send({result: 2 * request.query.radius * Math.PI});
});

module.exports = router;