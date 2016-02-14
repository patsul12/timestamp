var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:timestamp', function(req, res, next) {
  var input = req.params.timestamp
  if (input.length === 10) {
    var stamp = new Date(parseInt(input));
  } else {
    var stamp = new Date(input);
  }
  var options = { year: "numeric", month: "long", day: "numeric"}
  var output = {
    unix: Date.parse(stamp),
    natural: stamp.toLocaleTimeString("en-US", options)
  }
  if (isNaN(output.unix)) {
    output.unix = null;
    output.natural = null;
  }
  res.json(output);
});

module.exports = router
