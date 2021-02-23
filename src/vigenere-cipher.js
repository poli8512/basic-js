const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  constructor (type=true){
    this.type=type
    this.result=''
    this.alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  }
//получаем индексы каждой буквы строчки и ключевого слова
  findIndOfStr(strArray,alphaArr) {

    const arrToPush=[]
    for(let i=0;i<strArray.length;i++){
      //console.log(strArray[i])
      for(let n=0; n<alphaArr.length;n++){
        //получаем массив номеров строки
        let alNum=alphaArr[n]
        if(strArray[i].toLowerCase()===alNum){
          arrToPush.push(alphaArr.indexOf(alNum))
          break
        }
        if(alphaArr.indexOf(alNum)==alphaArr.length-1){
          arrToPush.push(strArray[i])
        }
      }
    }
    return arrToPush
  }
  //надо вято каждую букву стр,добавить ее, и увеличить переменную на один
  glueIndexes(stringIndexes,keyIndexes,decoder=false){
    let numberKeyW=0
    const newIndx= []
    stringIndexes.forEach(elem=>{
      if(typeof elem=== 'number' ){
        if(!decoder){
          newIndx.push(elem+keyIndexes[numberKeyW])
          numberKeyW+1<=keyIndexes.length-1?numberKeyW= numberKeyW+1:numberKeyW=0
        }else{
          //если индекс меньше нуля, то из 26 вычитаем этот индекс
          newIndx.push(elem-keyIndexes[numberKeyW])
          numberKeyW+1<=keyIndexes.length-1?numberKeyW= numberKeyW+1:numberKeyW=0
        }

      }else{
        newIndx.push(elem)
      }
    })
    return newIndx
  }
  //получаем буквы из индексов
  lettersFromInd(arr,alphaArr,decoder=false){
    let chartsArr=[]
    for(let i=0;i<arr.length;i++){
      if(typeof arr[i]=== 'number'){
        let a=!decoder
            ? arr[i]>=26?arr[i]-26:arr[i]
            : arr[i]<0?26+arr[i]:arr[i]
        for(let r=0;r<alphaArr.length; r++){
          a===alphaArr.indexOf(alphaArr[r])
          && chartsArr.push(alphaArr[r])
        }
      }
      else{
        chartsArr.push(arr[i])
      }
    }
    return chartsArr
  }

  encrypt(string,keyWord) {
    //получаем индексы каждой буквы строчки и ключевого слов
    const strArrInd=this.findIndOfStr(Array.from(string.toLowerCase()),this.alphabet)
    //console.log('1',strArrInd)

    const keyArrInd=this.findIndOfStr(keyWord.toLowerCase(),this.alphabet)
    //console.log('2',keyArrInd)
    //надо вято каждую букву стр,добавить ее, и увеличить переменную на один
    const glueArr= this.glueIndexes(strArrInd,keyArrInd)
    //console.log('Gl',glueArr)
    //получаем буквы из индексов
    const finishStr = this.lettersFromInd(glueArr,this.alphabet)
    //console.log('EnCript',finishStr.join(''))
    this.result= this.type
        ? finishStr.join('').toUpperCase()
        : finishStr.reverse().join('').toUpperCase()
    return this.result
  }
  decrypt(string,keyWord) {
    const strArrInd=this.findIndOfStr(Array.from(string.toLowerCase()),this.alphabet)
    //console.log('3',strArrInd)
    const keyArrInd=this.findIndOfStr(keyWord,this.alphabet)
    //console.log('4',keyArrInd)
    //надо вято каждую букву стр,добавить ее, и увеличить переменную на один
    const glueArr= this.glueIndexes(strArrInd,keyArrInd,true)
    //console.log(glueArr)
    //получаем буквы из индексов
    const finishStr = this.lettersFromInd(glueArr,this.alphabet,true)
    //console.log('Decript', finishStr.join('').toUpperCase())
    this.result= this.type
        ? finishStr.join('').toUpperCase()
        : finishStr.reverse().join('').toUpperCase()
    return this.result
  }
}

module.exports = VigenereCipheringMachine;
