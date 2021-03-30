const orm = require("../config/orm");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
          cb(res);
        });
    },
    insertOne: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, (res) => {
          cb(res);
        });
    },
    updateOne: (objColVals, status, cb) => {
        orm.update("burgers", objColVals, status, (res) => {
          cb(res);
        });
    }      
}

module.exports = burger;