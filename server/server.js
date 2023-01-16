// import news from "../src/index.js";
import express from "express";
import newsRoutes from "./articles.js";
import * as dotenv from 'dotenv'
dotenv.config()   // {path: "../.env"}
const PORT = process.env.PORT;
console.log(PORT);

const app = express();

// middleware
app.use(express.json()); // attaches data to req
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/news", newsRoutes);

//listen for database
app.listen(PORT, () => {
  console.log("Connected to OrbitDB, listening to PORT ", PORT);
});
