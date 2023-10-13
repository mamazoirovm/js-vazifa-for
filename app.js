// TO'RTBURCHAK
let chap = 8;
let ong = 8;
let pow = ong * chap;
let perimetri = 2 * (ong + chap);
let yuzasi = perimetri
function Value(pow) {
    if (pow > perimetri) {
        yuzasi = pow
    }
}
console.log(yuzasi);
Value(pow)

// HTTS MASALA
function sonniTop(number) {
  let uzunlik = number.toString().length;
  let toqmi = true;
  let raqamlarim = number.toString().split("");
  for (let i = 0; i < raqamlarim.length; i++) {
    let raqam = parseInt(raqamlarim[i]);
    if (raqam % 2 === 0) {
      toqmi = false;
      break;
    }
  }
  if (toqmi && uzunlik % 2 !== 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
let number = 13759111;
sonniTop(number);

// SHAXBOZ MASALA
function calculateTalkingTime(start, end) {
  let totalTime = 0;
  for (let i = start; i <= end; i++) {
    totalTime += 10;
  }
  return totalTime;
}
let input = "96".split(" ");
let start = parseInt(input[0]);
let end = parseInt(input[1]);
let talkingTime = calculateTalkingTime(start, end);
console.log(talkingTime);

// TAQQOSLASH
function Taqqosla(A, B) {
  if (A > B) {
    console.log(">");
  } else if (A === B) {
    console.log("=");
  } else {
    console.log("<");
  }
}
let A = 7;
let B = 13;
Taqqosla(A, B);

// while masala

function uzunlikTopish(s, b) {
    let emptySegment = s;
    
    while (emptySegment % b !== 0) {
      emptySegment--;
    }
    
    console.log("S usuznlikdagi bo'sh qismini aniqlash: " + emptySegment);
  }
  
  let s = 35;
  let b = 6;
  uzunlikTopish(s, b);

