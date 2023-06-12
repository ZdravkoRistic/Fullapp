const {Schema, model} = require("mongoose")


const UserSchema = new Schema({

firstName:{type:String, required:true},
lastName:{type:String, required:true},
password:{type:String, required:true},
role:{type:String, role:"admin"}

})


const UserModel = model(users, UserSchema)

module.exports = UserModel