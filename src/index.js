

const express = require('express');
const config = require('./server/config');
//Database 
require('./database');

const app = config(express());



//Starting the server 
app.listen(app.get('port'), () => {
    console.log('Sever On port', app.get('port'));
}); 


