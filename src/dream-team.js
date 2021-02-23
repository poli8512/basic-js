const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let fin=[]
  if(!Array.isArray(arr)){
    return false
  }
  else{
    arr.forEach(e=>{
      if(typeof e == 'string'){
        let cleanEl=e.trim().toUpperCase()
        fin.push(cleanEl[0])
      }
      else{
        return
      }
    })
    if(fin){
      return fin.sort().join('')
    }else{
      return false
    }
  }

};
