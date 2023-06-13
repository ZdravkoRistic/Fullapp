 const UserModel = require('../../models/userSchema')

const addUser = (req, res)=>{

    const reqBody = req.body

console.log(req.body);


const newUser = new UserModel(reqBody)
newUser.save()
.then((savedUser)=>{
    res.send(savedUser)
})
.catch((error)=>{
    console.log(error);
})




}
module.exports = addUser

