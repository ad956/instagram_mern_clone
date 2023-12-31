const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Mongoose Connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDatabase;
