const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")

const tempelatePath = path.join(__dirname,'../tempelates')

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.set("views engine","hbs")
app.set("views",tempelatePath)
app.get("/login",(req,res)=>{
    res.render("P:\\WebD\\Express\\tempelates\\login.hbs");
})
app.post("/login",async (req,res)=>{
    const data = {
        name:req.body.name,
        password:req.body.password
    }
    console.log(`${data.name} has logged in`)
    res.render("P:\\WebD\\Express\\tempelates\\home.hbs")

})
app.post("/quiz",async (req,res)=>{
    res.render("tempelates\\page3.html")
})

app.listen(3000,()=>{
    console.log("port connected")
})