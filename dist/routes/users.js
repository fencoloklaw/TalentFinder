"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../contollers/userController");
const passport = require("passport");
const database_1 = require("../config/database");
const path = require("path");
class Routes {
    constructor() {
        this.userController = new userController_1.UserController();
        this.config = new database_1.DatabaseConfig();
    }
    routes(app) {
        app.route('/users/register')
            .post((req, res) => {
            this.userController.addUser(req.body, res);
        });
        app.route('/users/postjob')
            .post((req, res) => {
            this.userController.addJobPost(req.body, res);
        });
        app.route('/users/authenticate')
            .post((req, res) => {
            this.userController.getUserByEmail(req, res);
        });
        app.route('/users/profile')
            .get(passport.authenticate('jwt', { session: false }), (req, res) => {
            res.json({ user: req.user });
        });
        app.route('/users/updateProfile')
            .put(passport.authenticate('jwt', { session: false }), (req, res) => {
            this.userController.updateUser(req, res);
        });
        app.route('/users/search')
            .post((req, res) => {
            this.userController.getMatchingUsers(req, res);
        });
        app.route('/users/searchJobs')
            .post((req, res) => {
            this.userController.getMatchingJobs(req, res);
        });
        app.route('/users/recommendations')
            .post((req, res) => {
            this.userController.getRecommendedResults(req, res);
        });
        app.get('/', (req, res) => {
            res.send('Invalid Endpoint');
        });
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../public/index.html'));
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=users.js.map