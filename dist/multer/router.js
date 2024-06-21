"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadRouter = void 0;
const express_1 = require("express");
const multer_1 = require("./multer");
exports.uploadRouter = (0, express_1.Router)();
exports.uploadRouter.post('/upload', multer_1.upload.single('image'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }
    // Handle file upload success
    res.send('File uploaded successfully.');
});
