const { mongo, default: mongoose } = require("mongoose")

const connectDB = async () =>{
    try{
        if (mongoose.connection.readyState == 0){
            await mongoose.connect(process.env.MONGO_URI)
            console.log("db_connected")
        }
    }catch{
        console.log("db not connected")
    }
}

export default connectDB;