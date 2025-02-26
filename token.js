const jwt = require('jsonwebtoken');    


const authenticateToken = (req, res, next) => {
    const token = req.headers['token'];
    const secret = process.env.SECRET_KEY
    

    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, secret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;