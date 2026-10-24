const express = require('express');
const app = express();
app.use(express.json());

let students = [
    { id: 1, name: 'Nikhil Gupta',age: 20 },
    { id: 2, name: 'Rahul Sharma', age: 22 },
    { id: 3, name: 'Suresh Kumar ', age: 21 }

];
app.get('/students', (req, res) => {
    res.send('Server is running');
});
app.post('/students', (req, res) => {
    const newsstudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    students.push(newsstudent);
    res.json(newsstudent);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});