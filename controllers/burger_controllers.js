var express = require("express");
var burger = require("../models/burger.js");

module.exports = function(app) {

    // GET route for getting all of the todos
    app.get("/", function(req, res) {
      burger.selectAll(function(data) {
        var hbsObject = {
          burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
    });
  
    // POST route for saving a new todo. You can create a todo using the data on req.body
    app.post("/api/burger", function(req, res) {
      burger.insertOne([
        "burger name", "burger status"
      ], [
        req.body.burger_name, req.body.devoured
      ], function(result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
      });
    });
  
    // PUT route for updating todos. The updated todo will be available in req.body
    app.put("/api/burger/:id", function(req, res) {
      var status = "id = " + req.params.id;

      console.log("status", status);
  
      burger.updateOne({
        devoured: req.body.devoured
      }, status, function(res) {
        if (res.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        } else {
        res.status(200).end();
        }
      });
    });
}
// Export routes for server.js to use.
module.exports = app;