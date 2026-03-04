const mongoose = require('mongoose')
const CONNECTION_URL = 'mongodb://127.0.0.1:27017/mernbe' 
//   mongodb://localhost:27017/mernbe    = connection link
// merbe = 'database name'


const dbconnection = async ()=>{
    try {
        await mongoose.connect(CONNECTION_URL)
        console.log("Database Connected successfully!!!!!")
    } catch (error) {
        console.log(error)
    }
}


module.exports = dbconnection;