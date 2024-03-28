require("dotenv").config();

const { app } = require("./src/app");

app.listen(3000, () => {
  console.log("server with port 3000 --> start");
});
