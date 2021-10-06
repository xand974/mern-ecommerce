const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign(
    { isAdmin: user.isAdmin, _id: user._id },
    process.env.SECRET_ACCESS_TOKEN,
    { expiresIn: "1d" }
  );
};

module.exports = generateAccessToken;
