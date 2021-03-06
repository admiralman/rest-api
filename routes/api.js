const express = require('express');
const router = express.Router();


//get a list of items
router.get('/api', function(req, res){
    res.send({type: 'GET'});
});

//add new item
router.post('/api', function(req, res){
    console.log(req.body);
    res.send({
        type:'POST',
        name: req.body.name,
        rank: req.body.rank
    });
});

//update existing item
router.put('/api/:id', function(req, res){
    res.send({type: 'PUT'});
});

//delete item
router.delete('/api/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;
