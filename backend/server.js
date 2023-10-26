const express = require("express");
const cors = require("cors");
const webPush = require("web-push");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const routes = require("./routes/routes");
const config = require("./config");

const port = process.env.PORT;
const keys = webPush.generateVAPIDKeys();
// webPush.setVapidDetails("", process.env.PUBLICKEY, process.env.PRIVATEKEY);
// console.log(keys);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200", "http://localhost:8080"],
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(routes);
app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
