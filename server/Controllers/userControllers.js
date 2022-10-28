const UserModel = require("./../Models/userModel.js");

module.exports.registerUser = async(req, res,nex) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(200).json({
      success: true,
      user
    })
  } catch (error) {
    nex(error);
  }
}

module.exports.loginUser = async(req,res,nex) => {
  try {
    const {email, password} = req.body;
    const user = await UserModel.findOne({email})
    if(user.password !== password){
      throw "Wrong password"
    }else{
      res.status(200).json({
        success: true,
        user
      })
    }
  } catch (error) {
    res.status(400).json({success: false, message: error})
  }
}