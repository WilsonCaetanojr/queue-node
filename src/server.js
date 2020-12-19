import express from "express";
import user from "./routes/userRoutes";

const app = express();

app.use(express.json());
app.use("/user", user);

app.listen(9999, () => {
  console.log("Server running port 9999");
});
