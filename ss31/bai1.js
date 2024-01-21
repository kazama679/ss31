function check(str) {
    let doDai = str.split(' ');
    let text = '';
    for(let i = 0; i < doDai.length; i++){
      if(doDai[i].length >= text.length){
        text = doDai[i];
      }
    }
    return [text, text.length];
}
console.log(check("Chữ dài nhất là nghẹo =))"));