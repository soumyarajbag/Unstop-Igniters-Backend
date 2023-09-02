import Team from '../models/Team.js';

export const getMembers = async (req , res) => {
     let members ;
     try{
        members = await Team.find();
     }
     catch(err){
         console.log(err);
     }
     if(!members){
        return res.status(404).json({message : "No member found"});
    }
    return res.status(200).json({members});
} 

export const addMember = async (req , res) => {
    const {cell , name , role , image , linkedin , github , instagram } = req.body;
    let member ;
   
    try{
        member = new Team({
            cell , name , role , image , linkedin , github , instagram
        })
        
       await member.save();
    }
    catch(err){
        console.log(err);
    }
    if(!member){
        return res.status(404).json({message : "Member not added"});
    }
    return res.status(200).json({member , message : "Member added successfully"});
}