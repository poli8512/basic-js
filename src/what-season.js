const CustomError = require("../extensions/custom-error");

module.exports =  function getSeason(date) {
  // console.log("GGG",Object.prototype.toString.call(date) === "[object Date]")
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  if(date=== null){
    new Error('THROWN')
  }
  if (Object.prototype.toString.call(date) === "[object Date]") {
    const month = date.getMonth();
    switch (month) {
      case 0:
      case 1:
      case 11:
        return "winter";
        break;
      case 2:
      case 3:
      case 4:
        return "spring";
        break;
      case 5:
      case 6:
      case 7:
        return "summer";
        break;
      case 8:
      case 9:
      case 10:
        return "autumn";
        break;
      default:
        return "Unable to determine the time of year!";
    }
  } else {
    throw new Error();
  }
}