const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});


app.get('/rain', (req, res) => {
	res.set('X-full-stack', '4life');
	res.status(418);
	res.send('I prefer coffee or some other lame internet joke.');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
