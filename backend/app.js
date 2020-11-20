const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose"); //import mongoose
const app = express()
const bcrypt =require ("bcrypt");
const jwt = require('jsonwebtoken');
const checkAuth =require("./middleware/check-auth");

const User = require ("./models/user");
const Testkit =require('./models/testkit');


mongoose.connect("mongodb+srv://max:OklBMmpdxA436z7K@cluster0.awk8b.mongodb.net/covidTest?retryWrites=true&w=majority")
.then(()=>{
  console.log('Connected to database');
})
.catch(()=>{
  console.log('Connection failed');
});


app.use(bodyParser.json());

app.use((req, res, next)=>{
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
next();
});


//testkit//
app.post("/api/testkits",(req,res,next)=>{

const testkit = new Testkit({
  testkitName: req.body.testkitName,
  stock:req.body.stock
});
testkit.save().then(createdTestkit =>{
  console.log(testkit)
  res.status(200).json({
    message:'Testkit added successfully',
    postId: createdTestkit._id
  })
})
console.log(testkit);
res.status(201).json({
  message:"Added"
})
});

app.get('/api/testkits',(req, res, next)=>{
  Testkit.find().then(documents =>{
    res.status(200).json({
      message:'Fetched',
      testkits: documents
    });
  })
});

app.delete('/api/testkits/:id', (req,res,next)=>{
  Testkit.deleteOne({_id: req.params.id}).then(result =>{
    console.log(result);
    res.status(200).json({message:"Deleted"});
  })
})


app.put('/api/testkits/:id', (req,res,next)=>{
  const testkit = new Testkit({
    _id:req.body.id,
    testkitName: req.body.testkitName,
    stock: req.body.content
  })
  Testkit.updateOne({_id:req.params.id}, testkit).then(result =>{
    console.log(result);
    res.status(200).json({message:"Updated"})
  })
})
//end of testkit//


//signup

app.post('/api/user/signup', (req, res, next)=>{
  bcrypt.hash(req.body.password,10)
  .then(hash =>{
    const user = new User({
      username: req.body.username,
      password: hash

    });
    user.save() //save data to database
    .then(result =>{
      res.status(201).json({
        message: 'User created', //response after saving
        result:result
      });
    })
    .catch(err =>{
      res.status(500).json({
        error:err
      });
    });
  });
});

//login//
app.post('/api/user/login',(req,res,next)=>{
  let fetchedUser;
  User.findOne({username:req.body.username})
  .then(user => {
    if(!user){
      return res.status(401).json({
        message:'Auth failed'
      });
    }
    fetchedUser =user
    return bcrypt.compare(req.body.password, user.password)
  })
  .then(result=> {
    if(!result){
      return res.status(401).json({
        message:'Auth failed'
      });
    }const token = jwt.sign(
      {username:fetchedUser.username, fullname:fetchedUser.fullname,role:fetchedUser.role, userId: fetchedUser._id},
      "secret this should be longer",
      {expiresIn:'1h'}
    );
      res.status(200).json({
        token: token
      })

  })
  .catch(err => {
    return res.status(401).json({
      message:'Auth failed'
    });
  })
  })
/*

app.use('/api/testkits',(req, res,next)=>{
  const testkits=[
{
  id:"jshsdsd",
  testkitName:"TTTT",
  stock:1
}
  ]
res.status(200).json({
  message:"Fetched",
  testkits:testkits
})

});
*/

//export for other module can import
module.exports = app;
