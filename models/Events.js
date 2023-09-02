import mongoose from "mongoose";
const Person = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    image : {
        type : String ,
        required : true
    }
})

const Winners = new mongoose.Schema({
    domain :{
        type : String ,
        required : true
    },
    team : {
        type : String ,
        required : false
    },
    members :{
        type : [Person] ,
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
    gallery : {
        type : [String] ,
        required : false
    }
});

export default mongoose.model("Events" , Events , "events");