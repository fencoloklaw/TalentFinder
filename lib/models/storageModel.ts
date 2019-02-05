import * as multer from "multer";
import * as mime from "mime-types";

export var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, __dirname + "/../public/uploads");
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname + '.' + mime.extension(file['mimetype']));
    }
});


export var upload = multer({
    storage: Storage
});