const User = require('../models/userModel')

//register user
const registerUser = async (req, res) => {
    const {username, email, password} = req.body

    //add to db
    try {
        const user = await User.create({username, email, password})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    registerUser
}