const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World, Nginx and Express running on our server');
});

app.get('/demo', (req, res) => {
	res.set('X-full-stack', 'tribrx');
	res.status(418);
	res.send('I prefer tea!');
})

app.listen(port, () => console.log('App listening on http://localhost:' + port));
