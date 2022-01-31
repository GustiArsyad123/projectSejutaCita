require("dotenv").config();
const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

const mongoose = require("mongoose");

module.exports = {
  connect: () => {
    mongoose
      .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: DB_USER,
        pass: DB_PASS,
        authSource: "admin",
      })
      .then(() => {
        console.log(
          "Successfully connected to the database",
          `mongodb://${DB_HOST}:${DB_PORT}`
        );
      })
      .catch((err) => {
        console.log("Could not connect to the database. Exiting now...", err);
        process.exit();
      });
  },
};
