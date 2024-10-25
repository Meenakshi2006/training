const express = require('express')
const app = express()
const port = 3000

const db = require("./db.js")
//db();

const router = require("./routes/route.js")
 
app.use("/api/v1",router) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//sample data
const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Bob Johnson', age: 35 },
  ];    