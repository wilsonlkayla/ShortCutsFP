/* global moment */

// When user clicks add-btn
$("#customer-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newCustomer object
    var newCustomer = {
      customer_name: $("#author").val().trim(),
      phone: $("#phone").val().trim(),
      time: $("#time").val().trim(),
      note: $("#customer-box").val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
    console.log(newCustomer);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newCustomer)
      // On success, run the following code
      .then(function() {
  
        var row = $("<div>");
        row.addClass("customer");
  
        row.append("<h3>" + newCustomer.customer_name + "</h3>");
        row.append("<p>" + "- Phone Number: " + newCustomer.phone + "</p>");
        row.append("<p>" + "- Wants a: " + newCustomer.note + "</p>");
        row.append("<p>" + "- At: " + newCustomer.time + "</p>");
        row.append("<p>Receipt Created At: " + moment(newCustomer.created_at).format("h:mma on dddd") + "</p>");
  
        $("#customer-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#author").val("");
    $("#phone").val("");
    $("#time").val("");
    $("#customer-box").val("");
  });
  
  // When the page loads, grab all of our customers
  $.get("/api/all", function(data) {
  
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("customer");
  
        row.append("<h3>" + data[i].customer_name + "</h3>");
        row.append("<p>- Requested a: " + data[i].note + "</p>");
        row.append("<p>- At: " + data[i].time + "</p>");
        row.append("<p>- Phone Number: " + data[i].phone + "</p>");
        row.append("<p>Receipt Created at: " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
        $("#customer-area").prepend(row);
  
      }
  
    }
  
  });