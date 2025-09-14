const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myDB");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const newUser = new User({ name: "Nisha", age: 25 });
newUser.save().then(() => console.log("User saved!"));
