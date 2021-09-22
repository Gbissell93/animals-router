const express = require("express");
const logger = require("morgan");
const path = require("path");

const teamRouter = require("./routes/router");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/team", teamRouter);

app.listen(PORT, function () {
  console.log(`Server is now running on PORT: ${PORT}`);
});
