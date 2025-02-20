const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true,
        unique : true
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePic:{
        type : String,
        default : ""
    },
    isAdmine:{
        type : Boolean,
        default : false
    }
},
{
    timestamps : true
}
);
//const User = new mongoose.model('User', userSchema);
module.exports = mongoose.model('User', userSchema);