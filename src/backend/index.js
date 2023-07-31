const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
//creating express app
const app = express();
//creating middleware:
// app.use(bodyParser.json());
app.use(express.json())
// app.use(cors());

//defining simple route:
app.listen(8000 , () =>{
    console.log('server is up')
})