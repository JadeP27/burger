var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burger", function(res) {
          cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.create("burger", cols, vals, function(res) {
          cb(res);
        });
    },
    updateOne: function(objColVals, status, cb) {
        orm.update("burger", objColVals, status, function(res) {
          cb(res);
        });
    }      
}

module.exports = burger;