import Events from "../models/Events.js";

export const getEvents = async (req , res) => {
    let events ;
    try{
        events = await Events.find();
    }
    catch(err){
        console.log(err);
    }
    if(!events){
        return res.status(404).json({message : "No events found"});
    }
    return res.status(200).json({events});
};

export const createEvent = async (req , res) => {
    const {name , date , count , venue , description , image , winners , winnermembers , view ,  coordinator , gallery } = req.body;
    let event ;
    try{
        event  = await Events.create({
            name : name , 
            date : date ,
            count : count ,
             venue : venue ,
              description : description ,
               image : image ,
                winners : winners ,
                winnermembers : winnermembers ,
                  coordinator : coordinator ,
                  gallery ,
                  view
        });
        

        await event.save();
    }
    catch(err){
        console.log(err);
    }
    if(!event){
        return res.status(404).json({message : "Event not created"});
    }
    return res.status(200).json({event , message : "Event created successfully"});
}