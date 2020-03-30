const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World, Nginx and Express running on our server');
});

app.listen(port, () => console.log('App listening on http://localhost:' + port));
