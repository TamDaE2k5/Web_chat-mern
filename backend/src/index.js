const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 5000;

app.use(morgan("dev")); // log
app.use(cors())

app.get("/api/user", (req, res) => {
  res.json({ name: "Tam",
             age : 20
  }); // tra ve json ten = Tam
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
