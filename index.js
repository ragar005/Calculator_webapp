var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'calculator_app')));
app.use('/a_scripts', express.static(__dirname + '/node_modules/angular/'));
app.use('/aui_router_scripts', express.static(__dirname + '/node_modules/angular-ui-router/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));


app.listen(3000);