const express = require('express');
const PORT = 3000;
const app = express();
const route = require('./routes/Route');

app.use(route);
app.listen(PORT,()=>{console.log(`App is Running on port : ${PORT}`)});