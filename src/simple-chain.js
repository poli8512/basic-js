const CustomError = require("../extensions/custom-error");

const chainMaker = {
  string:"",
  getLength() {
    this.name? this.name.length:0
  },
  addLink(value) {
    let s=`( ${value} )`
    this.string=this.string.length?this.string+ '~~'+s:s
    return this
  },
  removeLink(position) {
    const ar=this.string.split('~~')
    if(Number.isInteger(position) && position>=0){
      this.string=this.string.split('~~').filter(e=>e!==ar[position-1]).join('~~')
    }else{
      this.string=''
      throw new Error ('Not')
    }
    return this

  },
  reverseChain() {
    this.string = this.string.split('~~').reverse().join('~~')
    return this
  },
  finishChain() {
    let midVar=this.string
    this.string=''
    return midVar
  }
};

module.exports = chainMaker;
