import { Router } from "express";
import { upload } from "./multer";

export const uploadRouter = Router();

uploadRouter.post('/upload', upload.single('image'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }
  // Handle file upload success
  res.send('File uploaded successfully.');
});