const express=require("express")
const dotenv=require("dotenv").config()

const port=process.env.port

const app=express()

app.use(express.json())

app.use(express.urlencoded({ extended :false }))

app.use("/api/goals",require("./routes/goalroutes"))




app.listen(port,()=>console.log(`server started on port ${port}`))

