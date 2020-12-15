const db = require("../data/dbconfig");

module.exports = {
  getQuestionsByType,
  getRandomQuestion
}

function getQuestionsByType(type) {
  return db('questions')
    .where('categories', 'like', `${type}%`)
}

function getRandomQuestion() {
  return db('questions')
    .orderByRaw('random()')
    .limit(1);
}