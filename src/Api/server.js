var express = require('express');
var cors = require('cors');

var infoRouter = require('./Routes/info');
var employeesRouter = require('./Routes/employees'); 
var departmentsRouter = require('./Routes/departments');

var app = express()

app.use(cors());

app.use('/', infoRouter);
app.use('/employees', employeesRouter);
app.use('/departments', departmentsRouter);

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Server listening at http://%s:%s", host, port)
})