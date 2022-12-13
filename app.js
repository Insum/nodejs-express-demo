const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'Course 1'},
    {id: 2, name: 'Course 2'},
    {id: 3, name: 'Course 3'}
]

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses',(req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) res.status(404).send('Course with given ID was not found');
    res.send(course);
})

app.post('/api/courses', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    
    const result = schema.validate(req.body);

    if (result.error) {
        res.status(400).send(result.error);
        return;
    }
  
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
})

const port = process.env.PORT || 3023;
app.listen(port, ()=> console.log(`Listening on port ${port} ...`));