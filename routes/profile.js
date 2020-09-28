const express=require("express")
const isAuthorize=require('../middlewares/isAuthorize')
const isAuthenticate=require('../middlewares/isAuth')
const router=express.Router()
const Profile=require("../models/Profile")
const User=require("../models/User")

//CRUD Profile do by artisan
// add Profile artisan
router.post('/addprofile',isAuthenticate,isAuthorize(['artisan',false]),(req,res)=>{
    const user =req.user.id
    const {profileName,avatar,speciality,description,adress,
        codePostal,phoneNumber,Diploma,Rating }=req.body

    const profile= new Profile({user,profileName,avatar,speciality,description,adress,codePostal,phoneNumber,Diploma,Rating})
     profile.save()
     .then(contacts=>res.send(contacts))
     .catch(err=>console.log(err))
          });

// get all Profile artisan
router.get('/allprofile',isAuthenticate,isAuthorize(['client','artisan','admin',false]),(req,res)=>{
    Profile.find().populate("user")
    .then(profiles=>res.send(profiles))
    .catch(err=>console.log(err))
          });
// Delete Profile artisan
router.delete("/deleteartisan/:_id",isAuthenticate,isAuthorize(['artisan',false]),(req,res)=>{
    const user = req.user.id
    const _id=req.params._id

    Profile.findOneAndDelete({user: req.user.id,_id})
    .then(profiles=>res.send(profiles))
    .catch(err=>console.log(err))
})
// edit Profile artisan
router.put("/editprofile/:_id",isAuthenticate,isAuthorize(['artisan',false]),(req,res)=>{
    const user = req.user.id
    const _id=req.params._id

    const {profileName,avatar,speciality,description,adress,
        codePostal,phoneNumber,Diploma,Rating }=req.body
       

    Profile.findOneAndUpdate({user,_id},{$set:{profileName,avatar,speciality,description,adress,
        codePostal,phoneNumber,Diploma,Rating}},{useFindAndModify: false})
    .then(profiles=>res.send(profiles))
    .catch(err=>console.log(err))
})

module.exports=router