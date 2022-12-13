const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.get('/api/courses',(req, res)=>{
    res.send([1,2,3,4,5])
});

app.listen(3023, ()=> console.log('Listening on port 2023...'))