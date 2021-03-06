require('dotenv').config()
const express = require("express");
const app = express();
const keycloak = require('./config/keycloak-config.js').initKeycloak();
app.use(keycloak.middleware());

const users = require("./routes/users");
const quizzes = require("./routes/quizzes");
const questions = require("./routes/questions");



app.use("/users/", users);
app.use("/quizzes/", quizzes);
app.use("/questions/", questions);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
