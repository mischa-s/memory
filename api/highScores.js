const express = require("express");
const route = express.Router();

module.exports = function(db) {

  route.get("/", get);
  route.post("/", post);

 function get(req, res, next) {
    db.find('highScores', {})
      .then (highScores => {
        res.json(highScores)
      })
  }
  function post(req, res, next) {}


  return route;
};
