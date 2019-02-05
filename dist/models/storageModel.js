"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const mime = require("mime-types");
exports.Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + "/../public/uploads");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname + '.' + mime.extension(file['mimetype']));
    }
});
exports.upload = multer({
    storage: exports.Storage
});
//# sourceMappingURL=storageModel.js.map