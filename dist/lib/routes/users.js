"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../contollers/userController");
const passport = require("passport");
const database_1 = require("../../config/database");
const path = require("path");
class Routes {
    constructor() {
        this.userController = new userController_1.UserController();
        this.config = new database_1.DatabaseConfig();
    }
    routes(app) {
        app.get('/', (req, res) => {
            res.send('Invalid Endpoint');
        });
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../public/index.html'));
        });
        app.route('/users/register')
            .post((req, res) => {
            this.userController.addUser(req.body, res);
        });
        app.route('/users/authenticate')
            .post((req, res) => {
            this.userController.getUserByEmail(req, res);
        });
        app.route('/users/profile')
            .get(this.userController.authenticate('jwt'), (req, res) => {
            res.json({ user: req.user });
        });
        // passport.authenticate('jwt', {session: false}), (req: any, res: Response) => {
        // res.json({user: req.user});
        // });
        // app.route('/updateProfile')
        //     .put(passport.authenticate('jwt', {session: false}), (req: Request, res: Response) => {
        //         this.userController.updateUser(req, (err, data)=>{
        //             if(err) throw err;
        //             res.json({user:data});
        //         });
        //     });
        app.route('/users/updateProfile')
            .put(passport.authenticate('jwt', { session: false }), (req, res) => {
            this.userController.updateUser(req, res);
        });
        // app.route('/search')
        //     .post((req: Request, res: Response, next: NextFunction) => {
        //         this.userController.getMatchingUsers(req, (err, data) => {
        //             if (err) {
        //                 res.status(500).send(err);
        //             }
        //             if (!data) {
        //                 return res.json({success: false, msg: 'User not found'});
        //             }
        //             res.json({
        //                 success: true,
        //                 documents: data
        //             });
        //         });
        //     });
        app.route('/users/search')
            .post((req, res) => {
            console.log(req.body);
            this.userController.getMatchingUsers(req, res);
        });
        app.route('/users')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        // // Contact
        // app.route('/contact')
        // // GET endpoint
        //     .get((req: Request, res: Response) => {
        //         // Get all contacts
        //         res.status(200).send({
        //             message: 'GET request successfulll!!!!'
        //         })
        //     })
        //     // POST endpoint
        //     .post((req: Request, res: Response) => {
        //         // Create new contact
        //         res.status(200).send({
        //             message: 'POST request successfulll!!!!'
        //         })
        //     })
        //
        // // Contact detail
        // app.route('/contact/:contactId')
        // // get specific contact
        //     .get((req: Request, res: Response) => {
        //         // Get a single contact detail
        //         res.status(200).send({
        //             message: 'GET request successfulll!!!!'
        //         })
        //     })
        //     .put((req: Request, res: Response) => {
        //         // Update a contact
        //         res.status(200).send({
        //             message: 'PUT request successfulll!!!!'
        //         })
        //     })
        //     .delete((req: Request, res: Response) => {
        //         // Delete a contact
        //         res.status(200).send({
        //             message: 'DELETE request successfulll!!!!'
        //         })
        //     })
    }
}
exports.Routes = Routes;
//# sourceMappingURL=users.js.map