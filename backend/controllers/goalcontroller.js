//@desc get method
const getgoal=(req,res)=>{
    res.status(200).json({message:"get goal"})

}

//post
const setgoal=(req,res)=>{

    if(!req.body.text){
        res.status(400).json({message:"please add a text field"})
    }

    res.status(200).json({message:"post goal"})

}


const updategoal=(req,res)=>{
    res.status(200).json({message:`update goal ${req.params.id}`})

}

const deletegoal=(req,res)=>{
    res.status(200).json({message:`delete goal ${req.params.id}`})
}



module.exports={getgoal,setgoal,updategoal,deletegoal}