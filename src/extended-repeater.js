const CustomError = require("../extensions/custom-error");

module.exports = function repeater(strng, options ) {
  let str
  console.log(strng,'1')
  if(strng==null){
    console.log('NN')
    str= 'null'

  }else if(typeof strng==='boolean'){
    str=strng.toString()
  }else if(strng == undefined){
    str= 'undefined'
  }else{
    str=strng
  }

  console.log('((',str)
  let opts={...options}
  let string= str

  let addition
  if(opts.hasOwnProperty('addition')){

    if(typeof opts.addition==='undefined'){
      addition='undefined'
    }
    if(opts.addition==null){
      addition='null'
    }
    if(typeof opts.addition== 'boolean'){
      addition=opts.addition.toString()
    }
    if(opts.addition){
      addition= opts.addition.toString()
    }
  }

  console.log('!!!', addition)
  //&&&&&&&&&&&&&&&&&&&&&&&&&&& если фоплс то он к строке
  if(addition){
    if(opts.additionRepeatTimes){
      let m=''
      for(let i=0;i<opts.additionRepeatTimes;i++){

        m+=addition.toString()
        if(opts.additionSeparator){
          if(i<opts.additionRepeatTimes-1){
            m+=opts.additionSeparator
          }
        }else{
          if(i<opts.additionRepeatTimes-1){
            m+="|"
          }
        }
      }
      string=str+m
    }else{
      string=str+addition
    }
  }

  let newStr=string

  if(opts.repeatTimes){
    for(let i=1; i<opts.repeatTimes;i++){
      if(opts.separator){
        newStr+= opts.separator+string
      }else{
        newStr+= "+"+string
      }

    }
  }
  console.log(newStr)
  return newStr
}