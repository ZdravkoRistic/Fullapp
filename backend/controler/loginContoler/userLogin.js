const UserModel = require("../../models/userSchema")




const userLogin = (req, res) => {

let nameForm = req.body.name
let passwordForm = req.body.password
  
UserModel.findOne({ firstName: nameForm, password: passwordForm })
.then((user) => {
  if (!user) {
    console.log('Podaci nisu tačni ili korisnik ne postoji');
    res.redirect("/");
    } else  {
       
      req.session.user = user.toJSON();
    
  } 
   if (user.role == "admin" ) {
    req.session.user = user 
      res.redirect("/admin");
   } else {
      res.redirect("/");
    }
  }
)
.catch((err) => {
  console.log(err);
  res.redirect("/");
});
};




module.exports = userLogin
