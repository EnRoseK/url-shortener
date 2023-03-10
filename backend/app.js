// Packages Imports
import express from "express";
import cors from "cors";

// Routes Imports
import linkRouter from "./routes/link-router.js";
import { getUrl } from "./services/link-service.js";

const port = 8000;
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/links", linkRouter);

app.get("/:id", async (req, res) => {
  const { id } = req.params;

  const result = await getUrl(id);
  if (!result) res.status(404).json("Url not found");

  res.redirect(result);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
