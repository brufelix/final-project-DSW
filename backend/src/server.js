const express = require("express");
const app = express();

const middleware = require("./middlewares")
const routes = require("./routes")

const port = 3333;
const {
  log
} = console;

middleware(app);
routes(app)

app.listen(port, () => log(`🚀 Server ready at http://localhost:${port}`))

module.exports = app;