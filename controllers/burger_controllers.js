var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

// GET route for getting all of the todos
router.get("/", (req, res) => {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
  
// POST route for saving a new todo. You can create a todo using the data on req.body
router.post("/api/burgers", (req, res) => {
  burger.insertOne([
    "burger name", "devoured"
  ], [
      req.body.burger_name, req.body.devoured
      ], (result) => {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});
  
// PUT route for updating todos. The updated todo will be available in req.body
router.put("/api/burgers/:id", function(req, res) {
  var status = "id = " + req.params.id;

  console.log("status", status);
  
  burger.updateOne({
    devoured: req.body.devoured
  }, status, (result) => {
    if (result.changedRows == 0) {
    // If no rows were changed, then the ID must not exist, so 404
    return res.status(404).end();
    } else {
      result.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;