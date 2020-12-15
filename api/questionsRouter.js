const express = require("express");
const router = express.Router();
const { getRandomQuestion, getQuestionsByType } = require("./questionsModels");

router.get("/random", (req, res) => {
  getRandomQuestion()
    .then(data => {
      if (data.length > 0) {
        res.status(200).json(data[0]);
      } else {
        res.status(404).json(`Could not find any questions.`);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(`Error finding questions.`);
    })
})

router.get("/:type", (req, res) => {
  getQuestionsByType(req.params.type)
    .then(data => {
      if (data.length > 0) {
        res.status(200).json(data);
      } else {
        res.status(404).json(`Could not find any questions.`);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(`Error finding questions.`);
    })
})

module.exports = router;