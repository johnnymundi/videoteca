const path = require("path");
const express = require("express");
const routes = require("./routes");
const connectToDatabase = require("./database");
require("dotenv").config({ path: path.join(__dirname, ".env") }); // necessary to connect to .env
const cors = require("cors");

connectToDatabase();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Backend started at http://localhost:${port}`);
});
