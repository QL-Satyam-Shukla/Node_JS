require("dotenv").config({ path: __dirname + "/.env" });
console.log("  process.env.DB_PASS,", process.env.DB_PASS);
const express = require("express");
const sequelize = require("./src/config/database");
const apis = require("./src/app/routes/api");
const User = require("./src/app/models/user");
const http = require("http");
const app = express();
const server = http.createServer(app);
const port = 4000;

app.use(express.json());
app.use(apis);


app.use((req, res, next) => {
  
  console.log("Inside Middleware....");
  next();
});


// User.sync({ force: true });
// User.sync({alter:true})

// User.drop();

//connecting database and start the server
sequelize
  .authenticate()
  .then((result) => {
    console.log("Database Connected");
  })
  .then(() => {
    server.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("error", err.message);
  });

  // sequelize.sync({ alter: true }) // or force: true for development (but it drops tables)
  // .then(() => {
  //   console.log("All models were synchronized successfully.");
  // })
  // .catch((err) => console.error("Failed to sync DB:", err));

