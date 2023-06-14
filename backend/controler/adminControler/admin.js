const UserModel = require("../../models/userSchema")



const checkAdmin = (req, res) => {
    res.render("admin/adminDashboard");
}



module.exports = checkAdmin