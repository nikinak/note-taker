const express = require('express');

const app = express ();

const path = require ('path');

app.use(express.static('public'));

// app.get('/', (request, response) => {
//     response.sendFile(path.resolve(__dirname, './public/index.html'));
// });

// app.get('/api/users/:userId', (req, res) => {
//     const result = myUsers.filter(
//         (user) => user.id === parseInt(req.params.userId)
//         );
//     res.json(result);
// });

app.get('/notes', (request, response) => {
    response.sendFile(path.resolve(__dirname, './public/notes.html'));
});

// listen takes a port first then a callback function
app.listen(3001, () => {
    console.log('App now running on http://localhost:3001/');
});