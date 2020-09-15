const express = require('express');
const route = express.Router();
var contentsFromWorker = require('../../src/fetchData');

route.get('/fetchData',(req,res)=>{
   res.send(contentsFromWorker);
});

module.exports = route;