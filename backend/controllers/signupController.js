const bcrypt = require("bcryptjs");
const dotenv = require("dotenv").config();
const admin = require("firebase-admin");
const credentials = require("../credentials.json");
const app = admin.initializeApp({
  credential: admin.credential.cert(credentials),
});
const db = admin.firestore();
const signupController = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      username,
      password,
      enrolledCourse,
      role,
    } = req.body;
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(password, salt);
    const collection = db.collection("users");

    const emailRecord = await collection.where("email", "==", email).get();

    const userNameRecord = await db
      .collection("users")
      .where("username", "==", username)
      .get();

    if (!userNameRecord.empty) {
      return res.status(400).json({
        message: "This username already exists.",
      });
    } else if (!emailRecord.empty) {
      return res.status(400).json({
        message: "Email is already registered.",
      });
    } else if (req.body == null) {
      return res.status(400).json({
        messege: "you should fill all the fields.",
      });
    } else {
      const userCredentials = await admin.auth().createUser({
        email,
        password,
      });
      const userDetail = {
        firstname,
        lastname,
        email,
        password: hashedPassword,
        username,
      };
      const id = userCredentials.uid;
      const token = await admin.auth().createCustomToken(id);

      const document = db
        .collection("users")
        .doc(id)
        .set({ token, id, enrolledCourse: [], role: "student", ...userDetail });
      res.json({
        user: document,
        message: "SUCCESS",
        token,
      });
    }
  } catch (err) {}
};

module.exports = signupController;
