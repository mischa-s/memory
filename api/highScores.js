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
      .catch(next)
  }
  function post(req, res, next) {
    db.addName('highScores', req.body)
      .then((highScores) => {
        res.json({highScores})
      })
      .catch(next)
  }

  return route;
};
