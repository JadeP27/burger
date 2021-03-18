var express = require("express");
var connection = require("../models/burger.js");

module.exports = function(app) {

    // GET route for getting all of the todos
    app.get("/", function(req, res) {
  
    });
  
    // POST route for saving a new todo. You can create a todo using the data on req.body
    app.post("/", function(req, res) {
  
    });
  
    // DELETE route for deleting todos. You can access the todo's id in req.params.id
    app.delete("/", function(req, res) {
  
    });
  
    // PUT route for updating todos. The updated todo will be available in req.body
    app.put("/", function(req, res) {
  
    });
  };