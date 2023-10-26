const admin = require("firebase-admin");

const logoutController = (req, res) => {
  //   admin.auth().revokeRefreshTokens()
  res.cookie("token", "", {
    maxAge: 0,
  });
  res.json({
    message: "You logged out of your account.",
  });
};

module.exports = logoutController;
