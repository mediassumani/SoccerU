const jwt = require('jsonwebtoken');

// Constantly checks if the user is Autheticated
const checkAuth = (request, response, next) => {

    console.log("authentication user...")
    if (typeof request.cookies.SUToken === 'undefined' || request.cookies.SUToken === null) {
        request.user = null;
        console.log('user not authenticated');
    }else{
        const token = request.cookies.scToken;
        const decodedToken = jwt.decode(token, { complete: true }) || {};
        request.user = decodedToken.payload;
        console.log('user fully authenticated');
    }
    next();
};

module.exports = checkAuth;