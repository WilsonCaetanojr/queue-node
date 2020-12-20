import express from "express";
import userController from "../controllers/userController";

const routes = express.Router();

routes.post("/", async (req, res) => {
  const data = await userController.store(req, res);

  return res.json(data);
});

export default routes;
