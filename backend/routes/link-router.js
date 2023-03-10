import express from "express";
import { isValidURL, shorten } from "../services/link-service.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { url } = req.body;

  if (isValidURL(url)) {
    const result = await shorten(url);
    res.status(201).json(result);
  } else {
    res.status(400).json("Invalid url");
  }
});

export default router;
