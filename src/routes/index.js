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
// console.log(model);
router.get("/test",function(req, res) {
    model.doctor.findAll({ logging:console.log }).then(doc => {
        res.json(doc);
    })
});

router.get("/testByapi",function(req, res) {
    model.doctor.findByPk(1,{ logging:console.log }).then(doc => {
        // console.log(doc);
        res.json(doc);
    })
});

router.get("/testBygender",function(req, res) {
    model.doctor.findAll({ where: { speaking_langages: 'Telugu' ,gender:'Female'},logging: console.log }).then(doc => {
        // console.log(doc);
        res.json(doc);
    })
});

router.get("/testmultitable",function(req, res) {
    model.doctor.findAll({ where: { speaking_langages: 'Telugu' ,gender:'Female'},include: [{model: model.hosptial_affiliation,as: doctor_hosptial_affiliation}],logging: console.log }).then(doc => {
        res.json(doc);
    })
})

router.get("/testmultitable1",function(req, res) {
    model.doctor.findAll({ where: { gender:'Female'},include: [model.specialization],logging: console.log }).then(doc => {
        res.json(doc);
    })
})

router.get("/testSpecialization", function(req, res) {
    model.specialization.findAll({include:[model.doctor],logging: console.log}).then(doc => {
        res.json(doc);
    })
})

router.get("/testSpecialization/:id", function(req, res) {
    let {id} = req.params;
    model.specialization.findByPk(id,{include:[model.doctor],logging: console.log}).then(doc => {
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
