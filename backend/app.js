const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require("mongoose"); //import mongoose
const app = express()
/*
mongoose.connect("mongodb+srv://max:OklBMmpdxA436z7K@cluster0.awk8b.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(()=>{
  console.log('Connected to database');
})
.catch(()=>{
  console.log('Connection failed');
});


app.use(bodyParser.json());

app.use((req, res, next)=>{
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Header", "Origin, X-Rquested-With, Content-Type, Accept");
res.setHeader("Access-Control-Allow-Methods", "GET,POST, PATCH,DELETE, OPTIONS");
  next()
}
);

app.post("/api/posts", (req,res, next)=>
{
  //const post = req.body;

  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    console.log(post)
    res.status(200).json({
      message:'Post added successfully',
      postId: createdPost._id
    });
  });

 /* console.log(post);
  res.status(201).json({
    message:'Post added successfully'
  });
});

/*
app.use((req, res, next)=>{
  console.log ('First middleware')
  next()
}
)

app.use((req, res, next)=> {
  console.log ('Second middlewaree')
  next()
})

app.use((req, res, next)=> {
  res.send ('Hello from express!')
})

module.exports = app;


app.get('/api/posts', (req, res, next)=>{
  //add dummy posts content.Later should get from database
  //const posts =[

    //To retrieve data from database
    Post.find().then(documents => {
      res.status(200).json({
        message:'Post fetched sucessfully',
        posts: documents
      });
    })
    /*{
      id:'T001',
      title: 'First server side post',
      content: 'This is coming from the server'
    },
    {
      id:'T002',
      title: 'Second server side post',
      content: 'This is coming from the server'
    }]


  //chaining the status method to json method
  res.status(200).json({
    message: 'Post fetched successfully',
    //post property that get the dummy data aboove
    posts: posts
  });
});

app.delete('/api/posts/:id', (req,res,next) => {
  Post.deleteOne({ _id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({message:"Post deleted"});
  })
});
*/
//export for other module can import
module.exports = app;
