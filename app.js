const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Welcome to Tribrx');
});

app.get('/now', (req, res) => {
	res.set('X-powered-by', 'tribrx');
	res.status(200);
	res.send('What do you want to do now?');
});

app.get('/demo', (req, res) => {
	res.set('X-full-stack', 'tribrx');
	res.status(418);
	res.send('I prefer tea!');
});

app.listen(port, () => console.log('App listening on http://localhost:' + port));
