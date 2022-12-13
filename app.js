const { response } = require('express');
const express = require('express');
const app = express();

const courses = [
    {id: 1, name: "Course 1"},
    {id: 2, name: "Course 2"},
    {id: 3, name: "Course 3"}
]

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses',(req, res) => {
    res.send([1,2,3,4,5])
});

app.get('/api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) res.status(404).send("Course with given ID was not found");
    res.send(course);
})


const port = process.env.PORT || 3023;
app.listen(port, ()=> console.log(`Listening on port ${port} ...`));