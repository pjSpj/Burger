const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser=require("body-parser");
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes=require("./controllers/burgers_controller");

app.use(routes);
app.listen(PORT,function(){
    console.log('Server listening on: localhost: ' + PORT);
})