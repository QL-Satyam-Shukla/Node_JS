const moment=require('moment');
module.exports=(req,res,next)=>{
 req.time= moment().format();
    console.log(req.method,req.hostname, req.path, req.time,req.body);
    next();
}