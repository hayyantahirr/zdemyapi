import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
const app = express();

app.listen(4000, () => {
  console.log("Listening at 4000");
  db.connection.once("open", () => {
    console.log("db connect hogya lovely ");
  });
});

//http://localhost:4000/teachers
//POST
app.use(express.json()); //backend ko bata rhay hai frontend ka data JSON format mai arha hai
app.use("/", router);
