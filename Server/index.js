const express = require("express");
const dbconnection = require("./db");
const cors=require("cors")
// const userroutes=require("./Routes/user_Routes")
// Express is the web framework, which handles request and response


const app = express();
// app is the instance of express used to define routes and middleware
app.use(express.json())
const PORTNUMBER = 7000;
//portnumber on which server listens to

//for accepting any port number(for security purpose)
app.use(cors())
// app.use(cors({
//     origin:"localhost:3000"
// }))

//app.listen is the method that statrs the server and listens to the incoming requests ono that specified port number
//The callback function is executed when the server is successfully started
app.listen(PORTNUMBER, () => {
    // console.log("Server is running on port number: " + PORTNUMBER);
    console.log(`Server is running on portnumber: ${PORTNUMBER}`)
})

dbconnection()
// app.get is a method that defines a route  fo handling request(POST, PUT, GET, DELETE)

// /apitest is the endpoint
// req is request object that contains information about incoming 
// rres is response that used to send response back to tha client
app.get('/apitest',(req, res)=>{
    res.send("HELLO SERVER") //response text from server
})

//convert string  to path
//app.use(express.json())
//endpoint
app.use('/user',require("./Routes/user_Routes"))
// app.use('/user',userroutes)
app.use('/products',require("./Routes/product_Routes"))
app.use('/Category',require("./Routes/Category_Routes"))
app.use('/admin',require("./Routes/Admin_Routes"))
app.use('/image',express.static("./Uploads"))