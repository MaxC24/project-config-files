require('dotenv').config();
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../images')));
app.use(express.static(path.join(__dirname,'../node_modules')));
app.use(express.static(path.join(__dirname,'../angularApp')));

app.get('/*', (req, res) => {
	res.sendFile(path.join( __dirname, '../index.html' ));
});

app.listen(3000, ()=>{
	console.log('listening on port 3000');
});
