const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

  app.set("view engine", "ejs");
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static("public"));

mongoose
  .connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log("Connected With DataBase Successfully");
  })
  .catch((err) => console.log("Not Connected With DataBase"));
  const userSchema = mongoose.Schema({
      name: String,
      phone: String,
      email: String,
      message: String
  })
  const userModel = mongoose.model("Messages",userSchema);

  app.get("/", (req,res) => {
      res.sendFile(__dirname+"/index.html");
  });
  app.post("/message",(req,res) => {
      const Datasave = new userModel({
          name: req.body.name,
          phone: req.body.phone,
          email: req.body.email,
          message: req.body.message
      });
      Datasave.save( (err) =>{
          if(err){
              console.log("data not saved");
          }
          else if(!err){
            res.redirect("/")
          }
      });
  });



  app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("Server is running on Port 3000.");
  });