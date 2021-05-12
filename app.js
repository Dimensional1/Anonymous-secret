//jshint esversion:6
const Express=require("express");
const bodyParser=require("body-parser");
const  Ejs =require("ejs");
 
const app =express();
app.use(express.static("public"));
app.use("view engine",'ejs');
app.use(-bodyParser.urlencoded({extended:true}));

app.listen(3000,function(){
    console.log("Successfully Set UP !😉")
})
