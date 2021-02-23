const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count=0
  arr.forEach(e=>e.forEach(l=> l==='^^' && count++))
  if(count>0){
    return count
  }else{
    return 0
  }
};
