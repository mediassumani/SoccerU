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
        request.apiKey = null
    } else {

        const bearer = request.headers.authorization
        request.apiKey = bearer
    }
    next();
};

module.exports = checkAuth;