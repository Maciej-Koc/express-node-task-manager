const mongoose = require("mongoose");

const uri =
  "mongodb+srv://maciejkoc:#######@cluster0.2xfjzqe.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));
