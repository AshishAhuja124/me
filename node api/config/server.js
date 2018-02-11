var express = require('express');
require('dotenv').config({path:'/me/.env'});
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var cors = require('cors');

mongoose.connect(process.env.name,function(err,data){
    console.log('successfully connected')
})
   
        
var app = express();
var port = 3000 ;
app.get('/', function(req, res){
   res.send("Hello bro...");
});
var router = require('../routes/routes.js');
//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/employees', router);
app.listen(port, function(){
    console.log("server is running on port  "+ port);
})