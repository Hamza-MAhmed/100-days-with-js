//in index.js file
const app = require("express")();
require("dotenv").config();
const port = process.env.PORT || 6000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise
const connectDB = async () => {
    try {
      const res = await mongoose.connect(process.env.DATABASE);
      console.log
      ('Mongo DB connected');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  connectDB();
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

// // Your MongoDB connection code
// mongoose.connect(mongoURI, { useNewUrlParser: true });

// Other code related to your application

// mongoose.set('createIndexes', true);  //me................................
// // mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
// mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.listen(port, () => {
 console.log(`Server running at here ${port}`);
});




const { auth } = require("./middleware/auth")
const { RegisterUser, LoginUser, LogoutUser,getUserDetails } = require("./controller/authController");
app.post("/api/users/register",RegisterUser);
app.post("/api/users/login",LoginUser);
app.get("/api/users/auth",auth,getUserDetails);
app.get("/api/users/logout", auth, LogoutUser);