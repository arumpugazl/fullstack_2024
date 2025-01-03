var express = require('express')
var path = require('path')
var mdb = require('mongoose')
var User = require('./models/users')
var app = express()
const PORT = 3001;
app.use(express.json())

mdb.connect("mongodb://localhost:27017").then(() => {
    console.log("MonoDB connection Successful");
}).catch(() => {
    console.log("check your connection string");
})

app.get('/', (req, res) => {
    res.send("Welcome to Backend server")
})
app.get('/json', (req, res) => {
    res.json({ server: "Welcome to Backend", url: "localhost", port: `${PORT}` })
})
app.get('/static', (req, res) => {
    //console.log(__dirname);
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/signup', (req, res) => {
    console.log(req.body);
    var { firstName, lastName, email } = req.body
    console.log(firstName, lastName, email);
    try {
        var newUser = new User({
            firstName: firstName,
            lastName: lastName,
            email: email
        })
        newUser.save()
        console.log("User Added Successfully");
        res.status(200).send("User  Added successfully")
    }
    catch (err) {
        console.log(err);
    }

})
app.get('/getsignup',async(req,res)=>{
    try{
        var allSignUpRecords=await User.find()
        res.json(allSignUpRecords)
        console.log("All data fetched");
    }
    catch(err){
        console.log(err);
        res.send(err)
    }
})

app.listen(PORT, () => {
    console.log(`Backend Server Started\nUrl:http://localhost:${PORT}`)
})