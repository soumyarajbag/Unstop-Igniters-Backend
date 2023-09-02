import mongoose from "mongoose";






const Winners = new mongoose.Schema({
  winnermembers :{
        type : [WinnersDept] ,
        required : false
  }
  
});

export default mongoose.model("Winners" , Winners , "winners");


