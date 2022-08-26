const express=require("express")
const router=express.Router()

const {getgoal,setgoal,updategoal,deletegoal}=require("../controllers/goalcontroller")

//other type to clean code

router.route("/").get(getgoal).post(setgoal)



router.put('/:id',updategoal)

router.delete('/:id',deletegoal)

module.exports=router