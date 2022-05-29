const jwt = require("jsonwebtoken");
module.exports = {
  verifyToken: (req, res, next) => {
    const tokenFromHeader = req.headers.authorization;
    if (!tokenFromHeader)
      return res.status(401).json("you are not authentificated");
    const token = tokenFromHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, payload) => {
      if (err) return res.status(403).json("token is not valid");

      req.user = payload;
      return next();
    });
  },
  verifyIsAdmin: (req, res, next) => {
    if (req.user.isAdmin) {
      return next();
    } else {
      return res.status(401).json("you are not allowed to do this");
    }
  },
  verifyUserOrIsAdmin: (req, res, next) => {
    if (
      req.user._id === req.params.id ||
      req.user.isAdmin ||
      req.user._id === req.body.userId
    ) {
      return next();
    } else {
      return res.status(401).json("you are not allowed to do this");
    }
  },
};
