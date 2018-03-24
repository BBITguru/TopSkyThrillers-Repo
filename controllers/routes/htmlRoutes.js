// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads index.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });

    // add route loads the add.html page,
    // where players can enter their card choice <user-choice> to the db
    app.get("/add", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/add.html"));
    });

    // all route loads the all.html page,
    // where all cards in the db are displayed
    app.get("/all", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/game.html"));
    });

};