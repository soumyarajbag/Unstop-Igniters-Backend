import mongoose from "mongoose";

const Winners = new mongoose.Schema({
    domain :{
        type : String ,
        required : true
    },
    members :{
        type : Array ,
        required : true
    },
});

const Events = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    date : {
        type : String ,
        required : true
    },
    count : {
        type : Number,
        required : false
    },
    venue : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true ,
    },
    winners : {
        type : String ,
        required : false ,
    },
    winnermembers : {
        type : [Winners] ,
        required : false ,
    },
    coordinator : {
        type : String,
        required : true
    },
});

export default mongoose.model("Events" , Events , "events");