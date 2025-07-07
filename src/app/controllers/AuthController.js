const responder = require("../../utils/reponder");
const User=require('../models/user');

exports.login = async(request, response, next) => {
  try {
   const data= await User.findOne({
       where:{
          name:"Naman"
       }
   });
   console.log("Data",data)
    return responder(response, true, "SUCCESS",data);
  } catch (err) {
    return responder(response, false, "FAILURE", {});
  }
};

exports.logout = (request, response, next) => {
  try {
    return responder(response, true, "LOOUT", [
      { name: "Satyam Shukla", age: 22 },
    ]);
  } catch (err) {
    return responder(response, false, "FAILURE", {});
  }
};
