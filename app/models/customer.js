// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Customer" model that matches up with DB
var Customer = sequelize.define("Customer", {
  // Their Name
  customer_name: Sequelize.STRING,
  // Their Number
  phone: Sequelize.STRING,
  // Time of the start of the appointment
  time: Sequelize.STRING,
  // What they want to get done
  note: Sequelize.STRING,
  // created_at: Sequelize.DATE
});

// Syncs with DB
Customer.sync();

// Makes the Customer Model available for other files (will also create a table)
module.exports = Customer;