const { Schema, default: mongoose } = require("mongoose");

const registerSchema = new Schema({
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }
})
const Register = mongoose.models.Register || mongoose.model("Register",registerSchema);


export default Register;