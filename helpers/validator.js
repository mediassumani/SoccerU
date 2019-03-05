const User = require("../models/user")

// TODO : Update funtion to handle promise
exports.isValideAPIKey = function(key){

    if(!key){
        return false
    }
    if(key.length === 128){
        console.log("valid shit");
        return true
    } else {
        return false
    }
    // if(key.length != 128){
    //     return false
    // } else {

    //     User.findOne({ apiKey: key} )
    //     .then( (user) => {
            
    //         if(user){
    //             console.log("valid user");
    //             console.log(user);
                
    //             return true
    //         }else{
    //             console.log(user);
                
    //             console.log("no valid user from else");
                
    //             return false
    //         }
    //     }).catch( (err) => {
    //         console.log("no valid from catch");
            
    //         return false
    //     })
    // }
}