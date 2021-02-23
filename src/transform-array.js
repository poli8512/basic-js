const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  let arr = array.slice(); //стартовый массив
  if (!Array.isArray(arr)) {
    throw new Error("Not Array");
  }
  for (let key of arr) {
    if (typeof key === "string") {
      trans(key);
    }
  }

  function trans(key) {
    //  console.log(key)
    let ch = {
      "--discard-next": function (ind) {
        arr[ind]=undefined
        arr[ind+1]=undefined
      },
      "--discard-prev": function (ind) {
        arr[ind]=undefined
        arr[ind-1]=undefined
      },
      "--double-next": function (ind) {
        arr[ind]=arr[ind+1]
      },
      "--double-prev": function (ind) {
        arr[ind]=arr[ind-1]
      }
    };
    Object.entries(ch).forEach((o) => {
      o[0] === key && o[1](arr.indexOf(key));
    });
  }
  return arr.filter(e=>e!==undefined)

}
