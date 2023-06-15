const UserModel = require("../../models/userSchema")



const saveControler = (req, res) => {
    // Preuzeti podatke
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let password = req.body.password;
    let role = req.body.role;
  
    const saveAdmin = new UserModel({firstName: firstName, lastName: lastName, password: password, role: role});
    saveAdmin.save()
      .then(() => {
        res.redirect('/admin');
      })
      .catch((err) => {
        console.log({err: err.message});
        // Handle the error appropriately, such as sending an error response to the client
        res.status(500).json({ error: err.message });
      });
  };
  
  module.exports = saveControler;
  