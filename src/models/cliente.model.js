import mongoose from "mongoose";
 const clienteSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim: true
    },
    dni:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email :{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password :{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true
    },
    phoneNumber: {
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true,
    }

}, {
    timestamps: true
})

export default mongoose.model('cliente', clienteSchema)