import mongoose from "mongoose";

const PhotoCredit = new mongoose.Schema({
    url : {
        type : String ,
        required : true
    },
    credit : {
        type : String ,
        required : false
    }
});
const Person = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    rank:{
        type : String ,
        required : false
    },
    image : {
        type : String ,
        required : true
    },
    social : {
        type : String ,
        required : false
    },
    link : {
        type : String ,
        required : false
    }
})
const WinnerTeam = new mongoose.Schema({
    position : {
        type : String ,
        required : false ,
    },
    team : {
        type : String ,
        required : false
    },
    members :{
        type : [Person] ,
        required : true
    },
})
const Winners = new mongoose.Schema({
    domain :{
        type : String ,
        required : true
    },
    win : {
        type : {WinnerTeam} ,
        required : true
    }
  
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
        type : [PhotoCredit] ,
        required : false
    },
    view : {
        type : String ,
        required : false
    }
});

export default mongoose.model("Events" , Events , "events");