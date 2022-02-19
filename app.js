const express = require("express");
const app = express();
const port = 3000;


app.get('/demo', (req, res) => {
	res.set({ 'content-type': 'application/json; charset=utf-8' });
	res.set('X-full-stack', '4life');
	res.status(418);
	res.send('some other lame internet joke.');
})

app.get('/', (req, res) => {
	res.send('Hello World!');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
