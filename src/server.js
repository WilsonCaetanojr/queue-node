import express from "express";
import "dotenv/config";
import user from "./routes/userRoutes";

const app = express();

app.use(express.json());
app.use("/user", user);

app.listen(1789, () => {
  console.log("Server running port 1789");
});
