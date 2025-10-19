import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
import cors from "cors";

const app = express();

// Configuration for CORS
const corsOptions = {
  // Add ALL the origins that need to make client-side requests to your API
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies/authorization headers to be sent
};

// Apply the CORS middleware to your entire app
app.use(cors(corsOptions));

// ... rest of your server setup and routes ...

app.listen(4000, () => {
  console.log("Listening at 4000");
  db.connection.once("open", () => {
    console.log("db connect hogya lovely ");
  });
});

//http://localhost:4000/teachers
//POST

// Explicitly handle OPTIONS requests

app.use(express.json()); //backend ko bata rhay hai frontend ka data JSON format mai arha hai
app.use("/", router);
