// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Customer = require("../models/customer.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all customers
  app.get("/api/all", function(req, res) {

    // Finding all Customers, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Customer.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a customer's order
  app.post("/api/new", function(req, res) {

    console.log("Customer Info:");
    console.log(req.note);

    Customer.create({
      customer_name: req.body.customer_name,
      phone: req.body.phone,
      time: req.body.time,
      note: req.body.note,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created customer
      res.end();
    });

  });

};