import mongoose from "mongoose";

const Team = new mongoose.Schema({
    cell : {
        type : String ,
        required : true,
    },
    name : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        required : true,
    },
    image :{
        type : String,
        required : true,
    },
    linkedin : {
        type : String,
        required : false 
    },
    github : {
        type : String,
        required : false
    },
    instagram :{
        type : String,
        required : false
    }

})

export default mongoose.model("Team" , Team);