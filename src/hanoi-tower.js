const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let timeInSec = Math.floor((turns * 3600) / turnsSpeed);
  return { turns: turns, seconds: timeInSec };
};