const User = require ('../model/userSchema');

const createUser = async(req, res) => {
    try{
        //create a user in db
        const user = await User.create(req.body);
        res.json({user: user._id});
    }catch(err){
        res.json({
            errors: {
                email: "",
                password: "",
            },
        });
    }
};
module.exports = createUser;