const UserModel = require('../models/user-models')

const getALLUser = async (req,res) =>{
    try{
        const user = await UserModel.getALLUser()
        if(!user) res.json({
            message:'User Not Found'})
            res.json(user)

    }
    catch(error){
    console.log(error);
    res.status(500).json({
        message:'Error Get All Users'
    })
}
}

const getUserById = async (req,res) =>{
    try{
        const user = await UserModel.getUserById(req.params.id)
        res.json(user)

        
    }
    catch(error){
        console.log(error)
        res.json({
            message:'Error'
        })
        
    }
}
module.exports = {getALLUser,getUserById}
