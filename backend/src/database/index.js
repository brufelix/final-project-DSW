const Mongoose = require("mongoose");

Mongoose.Promise = global.Promise;
Mongoose.set("useCreateIndex", true);

let database;

exports.connection = () => {
  const uri = "mongodb://localhost/projectFinal";

  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

  database = Mongoose.connection;

  database.once("open",
    () => console.log("Connected to Database..."));

  database.on("error",
    () => console.log("Error with connection to database"));
};

exports.disconnect = () => {
  if (!database) {
    return;
  };

  Mongoose.disconnect();
};