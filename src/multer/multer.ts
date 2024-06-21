import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Specify the directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // Use the original file name
  }
});

export const upload = multer({ storage: storage });