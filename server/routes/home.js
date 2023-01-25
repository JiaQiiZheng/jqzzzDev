import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  return res
    .status(400)
    .json({ message: "Username and password are required." });
});

export default router;
