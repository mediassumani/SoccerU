const jwt = require('jsonwebtoken');

// Constantly checks if the user is Autheticated
const checkAuth = (request, response, next) => {

    if (typeof request.cookies.SUToken === 'undefined' || request.cookies.SUToken === null) {
        request.user = null;
        console.log('user not authenticated');
    }else{
        const token = request.cookies.SUToken;
        const decodedToken = jwt.decode(token, { complete: true }) || {};
        request.user = decodedToken.payload;
    }

    if(!request.headers.authorization){
        request.validation = false
    } else {

        request.validation = true
        const apiKey = request.headers.authorization
        User.findOne( { apiKey: apiKey} )
            .then( (user) => {
                if(user){
                    request.validation = true
                } else {
                    request.validation = false
                }
            }).catch( error => {
                response.status(400).json({ error: error })
              })
    }
    next();
};

module.exports = checkAuth;