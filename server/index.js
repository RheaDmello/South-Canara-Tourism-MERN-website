const express =require("express")
const mongoose =require("mongoose")
const cors =require("cors")
const EmployeeModel = require('./models/Employee')

const app= express()
app.use(express.json())
app.use(cors({
    origin:["https://south-canara-tourism-mern-website-frontend.vercel.app"],
    methods: ["POST", "GET"],
    credentials:true
}
));

mongoose.connect("mongodb+srv://rheadmello2004:j8KEYTgVnPpbTNAV@cluster0.dd2q6fi.mongodb.net/employee");
app.get("/", (req, res) =>{
    res.json("Hello");
})
app.post("/login", (req, res) =>{
    const{email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user =>{
        if(user) {
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("Password is incorrect")
            }
        } else{
            res.json("Please Sign Up")
        }

    })
    
})

app.post('/register',(req,res)=>{
    const { name,email,password} =req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if (user){
            res.json("Already have an account")
        } else {
    EmployeeModel.create({name: name, email: email, password: password})
    .then(employees =>res.json(employees))
    .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
})

app.listen(3001, ()=> {
    console.log("Server is running")

})

// app.post('/register',(req,res)=>{
//     EmployeeModel.create(req.body)
//     .then(employees =>res.json(employees))
//     .catch(err => res.json(err))

// })


