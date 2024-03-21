const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
const todos = require("./routes/todos.js");

app.use(cors());
app.use(express.json());
app.use("/todos/api", todos);

mongoose
  .connect(
    "mongodb+srv://ahmed-todos:vFNzypDpNaaVYGgz@cluster0.bfsruxe.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
