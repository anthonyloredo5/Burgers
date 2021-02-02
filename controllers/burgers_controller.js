var express = require('express');
var burger = require('../models/burger');
const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.selectAll(function (data) {

        const hbsObject = {
            'burgers': data
        };
        console.log('hbsObject', hbsObject);
        res.render('index', hbsObject);
    });

});

  router.post('/api/burgers', (req, res) => {
    burger.insertOne(req.body.name, req.body.sleepy, (result) => {
      // Send back the ID of the new quote
      console.log(req.body.name);
      console.log(req.body.sleepy);
      res.json({ id: result.insertId });
    });
  });

  router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log('Req.body coming in!!!!', req.body);

    if (req.body.sleepy === '0'){
        req.body.sleepy = '1'
    } else if(req.body.sleepy === '1') {
        req.body.sleepy = '0'
    }

    burger.updateOne(req.body.sleepy, req.params.id,(result) => {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
 });


module.exports = router;