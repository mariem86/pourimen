const express=require("express")
const isAuthorize=require('../middlewares/isAuthorize')
const isAuthenticate=require('../middlewares/isAuth')
const router=express.Router()
const User=require("../models/User")


//Ceate admin
router.post('/createadmin', async (req, res) => {
    try {
      const user = new User({
      firstName: "Chedi",
      lastName: "Messaoudi",
      email: "messaoudichedi@yahoo.fr",
      password: "1234",
      role: "admin"
      })
      const newUser = await user.save();
      res.send(newUser);
    } catch (error) {
      res.send({ message: error.message });
    }
  });

//ban artisan or client by admin
router.put("/ban/:_id",isAuthenticate,isAuthorize(['admin',false]),(req,res)=>{

  const _id=req.params._id
  User.findOneAndUpdate({_id},{$set:{"banned":"true"}},{useFindAndModify: false})
  .then(user=>res.send(user))
  .catch(err=>console.log(err))
})

module.exports=router