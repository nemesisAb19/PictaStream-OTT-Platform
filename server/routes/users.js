const router = require("express").Router();
const { app } = require("..");
const User = require("../model/userSchema");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");


//update 

router.put("/:id", verify, async(req , res) => {
    if(req.user.id === req.params.id || req.user.isAdmine){
        if(req.body.password){
            req.body.password = encryptedPassword
        }

        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body});

            res.status(200).json(updatedUser);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("you can update only your account");
    }
});

//delete


router.delete("/:id", verify, async(req , res) => {
    if(req.user.id === req.params.id || req.user.isAdmine){

        try{
              await User.findByIdAndDelete(req.params.id );

            res.status(200).json("user has been deleted");
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("you can delete only your account");
    }
});

//get


router.get("/find/:id", verify, async(req , res) => {
        try{
             const user = await User.findById(req.params.id );
             const { password: _, ...userDetails } = user._doc;

            res.status(200).json(info);
        }catch(err){
            res.status(500).json(err);
        }
    }
);

//getall


router.get("/", verify, async(req , res) => {
    const query = req.query.new;
    if( req.user.isAdmine){

        try{
            const users = query ? await User.find().sort({_id:-1}).limit(10) : await User.find();
            res.status(200).json(users);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("you are not allowed to see all users ");
    }
});

//get user stat

router.get("/stats", async (req, res) => {
    const today = new Date();
    const lastYear =  today.setFullYear(today.setFullYear() - 1);
    const monthsArray = [ 'January', 'February', 'March','April','May','June','July','August','September','October','November','December'];

    try{
        const data = await User.aggregate([
            {
                $project: {
                    month: {$month : "$createdAt"}
                }
            },
            {
                $group : {
                    _id : "$month",
                    total : {$sum : 1}
                }
            }
        ]);
        res.status(200).json(data);

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;