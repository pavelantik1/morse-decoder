const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  function getLetterListFromString(encrStr = '') {
    let letterList = [];
    
    for(let i = 0; i < encrStr.length / 10; i++){
      const element = encrStr.slice(i*10, i*10+10);
      letterList.push(element);
    }
    return letterList;
  }

  function deleteSpareLeftZero (argArr = []) {
    return argArr.map((item) => parseFloat(item).toString());
  }

  function convertListToMorseList (binaryList = []) {
    let morseList = binaryList.map( (binaryItem) => {
      let morseItem = '';
      if(isNaN(binaryItem)) return ' ';
      for (let i = 0; i < binaryItem.length /2; i++) {
        const binaryDotDash = binaryItem.substr(i*2, 2);
        morseItem += binaryDotDash === '10' ? '.' : '-';
      }
      return morseItem;
    });
    return morseList; 
  }

  function convertMorseListToEngList (morseList = []) {
    let engList = morseList.map(morseItem => {
      if(morseItem === ' ') return morseItem;
      const engLetter =  MORSE_TABLE[morseItem]; 
      return engLetter;
    });
    return engList;
  }

  if(expr.length % 10 !== 0) throw new Error("The string's length is not  multiple of 10." );

  let result = getLetterListFromString(expr);
  result = deleteSpareLeftZero(result);
  result = convertListToMorseList(result);
  result = convertMorseListToEngList(result);
  result = result.join('');
  return result;
}

module.exports = {
    decode
}