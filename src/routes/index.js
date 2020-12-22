/**
 * Routes
 */

// Dependencies
const router = require("express").Router();
const validator = require("express-validation");
const rules = require("./routeValidatorRules");
const model = require('../models');

// Controllers
// const { auth } = require("../controllers/auth.controller");
/**
 * Auth
 */
// router.post("/auth", validator(rules.auth), auth);

router.get("/test",function(req, res) {
    model.doctor.findAll().then(doc => {
        res.json(doc);
    })
})
// module.exports = async () => {
//     const user = await model.doctor.findAll();
//     model.doctor.findAll().then(doc => {
//         console.log('test doc',doc);
//     })
//     console.log(user);
//     if (!user) {
//         // user with provided email not found
//         // throw new Error('Invalid login');

//         return {
//             ok: false,
//             errors: [{path: 'email', message: 'No user with this email exists'}]
//         }
//     }
//     return user;
// };

module.exports = router;
