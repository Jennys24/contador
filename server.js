const express = require("express");
const app = express();
const port = 8000;

const session = require('express-session');
app.use(session({secret: 'miclave'})); 

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function (req, res){

  if(req.session.count==undefined){
    req.session.count = 0;
  };
  req.session.count ++;
  
  return res.render('contador',{count:req.session.count});
  
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );