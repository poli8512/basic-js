const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!isNaN(+sampleActivity) && +sampleActivity > 0) {
    if (typeof sampleActivity === "string" && sampleActivity.length > 0) {
      const k = 0.693 / HALF_LIFE_PERIOD;
      const time = +Math.log(MODERN_ACTIVITY / sampleActivity) / k;
      return time > 0 ? time : false;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
