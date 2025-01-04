var express = require('express')
var path = require('path')
var mdb = require('mongoose')
var cors = require('cors')
var User = require('./models/users')
var app = express()
var env=require('dotenv')

const PORT = 3001;

env.config()
app.use(express.json())
app.use(cors())


mdb.connect(process.env.MONGO_URL).then(() => {//mongodb://localhost:27017
    console.log("process.env.MONGO_URL")
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
    var { firstName, lastName, email, password } = req.body
    console.log(firstName, lastName, email, password);
    try {
        // var newUser = new User({
        //     firstName: firstName,
        //     lastName: lastName,
        //     email: email,
        //     password:password
        //})
        var newUser = new User(req.body)
        console.log(req.body.password);
        newUser.save()
        console.log("User Added Successfully");
        res.status(200).send("User  Added successfully")
    }
    catch (err) {
        console.log(err);
    }

})
app.get('/getsignup', async (req, res) => {
    try {
        var allSignUpRecords = await User.find()
        res.json(allSignUpRecords)
        console.log("All data fetched");
    }
    catch (err) {
        console.log(err);
        res.send(err)
    }
})
app.post('/login', async (req, res) => {
    var { email, password } = req.body
    try {
        var existingUser = await User.findOne({ email: email })
        //console.log(existingUser);
        if (existingUser) {
            if (existingUser.password !== password) {
                res.json({ message: "Invalid Credentials", isLoggedIn: false })
            }
            else {
                res.json({ message: "Login Successful ", isLoggedIn: true })
            }
        }
        else {
            //console.log("Inside else")
            res.json({ message: "Login Failed", isLoggedIn: false })
        }

    }
    catch (err) {
        console.log(err); //console.log("Login failed")
    }
})



app.listen(PORT, () => {
    console.log(`Backend Server Started\nUrl:http://localhost:${PORT}`)
})