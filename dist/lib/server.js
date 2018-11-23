"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/server.ts
const app_1 = require("./app");
const PORT = process.env.PORT || 8080;
// const httpsOptions = {
//     key: fs.readFileSync('config/server.key'),
//     cert: fs.readFileSync('config/server.crt')
// };
//
// https.createServer(httpsOptions, app).listen(PORT, () => {
//     console.log('Express server listening on port ' + PORT);
// });
app_1.default.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
//# sourceMappingURL=server.js.map