var express = require("express");
var router = express.Router();

var db = require("../models");

    router.get("/", (req, res)  => {
        db.Burger.findAll({order: [["burger_name", "ASC"],]}).then(callbackData => {
            let allBurgers = {
                burger: callbackData
            }
            res.render("index", allBurgers);
        });
    });
    
    router.post("/api/burgers", (req, res) => {
       db.Burger.create({burger_name: req.body.burger_name})
        .then(function () {
            res.end();
        });
    });
    
    router.put("/api/burgers", (req, res) => {
        db.Burger.update({devoured: true}, {where: {id: req.body.id}
        }).then( () => {
            res.status(200).end();
        });
    });

module.exports = router;

