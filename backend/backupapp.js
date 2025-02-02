const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose"); //import mongoose
const app = express()
const bcrypt =require ("bcrypt");
const jwt = require('jsonwebtoken');
const checkAuth =require("./middleware/check-auth");

const User = require ("./models/user");
const Testkit =require('./models/testkit');
const Patient =require('./models/patient');
const Test =require('./models/test');
const TestCentre =require('./models/testcentre');
const Officer = require('./models/officer');

mongoose.connect("mongodb+srv://max:OklBMmpdxA436z7K@cluster0.awk8b.mongodb.net/covidTest?retryWrites=true&w=majority", { useNewUrlParser: true })
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

//test

app.post("/api/tests",(req,res,next)=>{
  const test = new Test({
  username: req.body.username,
  testDate: req.body.testDate,
  status: req.body.status,
  result: req.body.result,
  resultDate: req.body.resultDate
  });
  test.save().then(createdTest =>{
    res.status(200).json({
      message:'Test added successfully',
      testID: createdTest._id
    });
  })
  res.status(201).json({
    message:"Added"
  })
});

app.get('/api/tests',(req, res, next)=>{
  Test.find().then(tests =>{
    res.status(200).json({
      message:'Tests fetched successfully',
      tests: tests
    });
  })
});

//end of test

//patient
app.post("/api/patients",(req,res,next)=>{
  const patient = new Patient({
  username: req.body.username,
  password: req.body.password,
  fullName: req.body.fullName,
  idNo: req.body.idNo,
  sex: req.body.sex,
  age: req.body.age,
  birthday: req.body.birthday,
  phoneNo: req.body.phoneNo,
  address: req.body.address,
  zip: req.body.zip,
  city: req.body.city,
  country: req.body.country,
  state: req.body.state
  });
  patient.save().then(createdPatient =>{
    console.log(patient)
    res.status(200).json({
      message:'Patient added successfully'
    })
  })
  res.status(201).json({
    message:"Added"
  })
});

app.get("/api/patients",(req,res,next)=>{
  Patient.find().then(patients =>{
    res.status(200).json({
      message: 'Patient fetched successfully',
      patients: patients
    });
  })

});
//End of patient
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
    testkitId: createdTestkit._id
  });
});
// console.log(testkit);
// res.status(201).json({
//   message:"Added"
// })
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
    stock: req.body.stock
  });
  Testkit.updateOne({_id: req.params.id}, testkit).then(result =>{
    if(result){
    console.log(result);
    res.status(200).json({message:"Updated Sucessfully"});
    }else{
      alert("Help");
    }
  });
});


//end of testkit//


//centre//
app.get('/api/testcentres',(req, res, next)=>{
  TestCentre.find().then(documents =>{
    res.status(200).json({
      message:'Fetched',
      testcentres: documents
    });
  })
});

app.post("/api/testcentres",(req,res,next)=>{

  const centre = new TestCentre({
    centreName: req.body.centreName,
  });
  centre.save().then(createdCentre =>{
    console.log(centre)
    res.status(200).json({
      message:'Centre added successfully',
      centreId: createdCentre._id
    });
  });
  // centre.save();
  // console.log(centre);
  // res.status(201).json({
  //   message:"Added"
 // })
  });

  app.put('/api/testcentres/:id', (req,res,next)=>{
    const testcentre = new TestCentre({
      _id:req.body.id,
      centreName: req.body.centreName,
    });
    TestCentre.updateOne({_id: req.params.id}, testcentre).then(result =>{
      if(result){
      console.log(result);
      res.status(200).json({message:"Updated Sucessfully"});
      }else{
        alert("Help");
      }
    });
  });


//centre//
//officer//
app.post("/api/officers",(req,res,next)=>{

  const officer = new Officer({
    centreName: req.body.centreName,
    position:req.body.position,
    fullname:req.body.fullname,
    username:req.body.username,
    password:req.body.password
  });
  centre.save().then(createdOfficer =>{
    console.log(officer)
    res.status(200).json({
      message:'Officer added successfully',
      officerId: createdOfficer._id
    });
  });
  // console.log(officer );
  // res.status(201).json({
  //   message:"Added"
  // })
  });


//officer//

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
