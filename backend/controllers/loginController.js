const bcrypt = require("bcryptjs");
const admin = require("firebase-admin");
const db = admin.firestore();

const loginController = async (req, res) => {
  const { username, password } = req.body;
  const collection = db.collection("users");
  const document = await collection.where("username", "==", username).get();
  const user = document.docs[0].data();
  const { role, token, id, email } = user;

  // console.log(username, role, token, id, email);
  if (!username) {
    return res.status(404).json({
      message:
        "There is no account with this username, you should create  an acount.",
    });
  }
  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({
      message: "password is not correct.",
    });
  }
  res.json({
    token,
    username,
    role,
  });
};
module.exports = loginController;
