const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    Username:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    ProfileImg:{
        type:String,
        require:true
    }
})

const users = mongoose.model("users",userSchema)
module.exports = users