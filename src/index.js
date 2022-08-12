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
    let arr = []
    for (let i = 0; i<expr.length /10 ; i++) {
        let len = i*10;
        arr[i] = expr.substr(len, 10);
    };
    arr = arr.map((el) => {
        el = el.replace(/10/g, '.');
        el = el.replace(/11/g, '-');
        el = el.replace(/0/g, '');
        el = el.replace('**********', ' ');
        el = MORSE_TABLE[el] || ' ';
        return el;
    }).join('');
return arr
}

module.exports = {
    decode
}
