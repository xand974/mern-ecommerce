const jwt = require("jsonwebtoken");
module.exports = {
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    !token && res.status(401).json("you are not authentificated");

    jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, payload) => {
      if (err) {
        return res.status(403).json("token is not valid");
      } else {
        req.user = payload;
        next();
      }
    });
  },
  verifyIsAdmin: (req, res, next) => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(401).json("you are not allowed to do this");
    }
  },
  verifyUserOrIsAdmin: (req, res, next) => {
    if (req.user._id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(401).json("you are not allowed to do this");
    }
  },
};
