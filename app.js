// TO'RTBURCHAK
function Rectangle(a, b) {
  let p = 2 * (a + b);
  let s = a * b;
  if (p > s) {
    return p;
  } else {
    return s;
  }
}
console.log(Rectangle(5, 9));

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

// kechikkan poyezd

//Yangi yil sovg'asi

// let g = 125000;
// let a = +prompt("Katta opa pulini  kiriting:") * 1;
// let b = +prompt("O'rtancha opa pulini  kiriting:") * 1;
// let c = +prompt("Kichik opa pulini  kiriting:") * 1;
// if (g <= a + b + c) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// Ikki xonali sonni toping

function IkkiXonali(M) {
  if (M > 9 && M < 100) {
    console.log((M - (M % 10)) / 10);
  } else {
    console.log("Kiritgan soningiz ikki xonali emas");
  }
}
IkkiXonali(5);
// oxirgi raqam
function UchXonali(H) {
  console.log(H % 10);
}
UchXonali(517);

// diagonallar soni
let a;

let q = 6;
a = (q * (q - 3)) / 2;

console.log(a);

//  Azimjonning qoylari

// let azimjon = +prompt("Qoylar soni: ") * 1;
// let quloq;
// quloq = azimjon / 2;
// console.log("Quloqlar soni " + quloq);

// Isfandiyor AlgebrA
let f;
function Algebra(l) {
  f = l ** 5 + 8 * l ** 4 - 5 * l ** 3 + 3 * l ** 2 + l - 12;
  console.log(f);
}
Algebra(1);

// 10 ming qadam

function Qadam(qadamlar) {
  if (qadamlar >= 1 && qadamlar <= 10000) {
    console.log((qadamlar * 100) / 10000 + " foiz.");
  } else {
    console.log("Birdan katta o'n mingdan kichik son kiriting.");
  }
}
Qadam(5000);

// omadli chipta

function omadliChipta(chipta) {
  if (chipta.toString().includes("13")) {
    console.log("Omadsiz chipta");
  } else {
    console.log("Omadli chipta");
  }
}
// Qiziqarli
function Qiziqarli(qiziq) {
  if (qiziq % 2 === 1) {
    console.log(" - Qiziqarli");
  } else {
    console.log(" - Qiziq emas");
  }
}
Qiziqarli(1);

// Harorat
function KelvinFara(selsiy) {
  let kelvin = selsiy + 273.15;
  let farangeyit = selsiy * 1.8 + 32;
  console.log("Kelvin: " + kelvin + " " + "Farangeyit: " + farangeyit);
}
KelvinFara(500.29);

omadliChipta(121358);
// while masala

function uzunlikTopish(s, b) {
  let emptySegment = s;

  while (s >= b) {
    emptySegment--;
  }

  console.log("S usuznlikdagi bo'sh qismini aniqlash: " + emptySegment);
}

let i = 1;
let n = 8;

//
// case
function findNumberOfDays(month) {
  let numberOfDays;

  switch (month) {
    case 1: // Yanvar
    case 3: // Mart
    case 5: // May
    case 7: // Iyul
    case 8: // Avgust
    case 10: // Oktabr
    case 12: // Dekabr
      numberOfDays = 31;
      break;
    case 4: // Aprel
    case 6: // Iyun
    case 9: // Sentabr
    case 11: // Noyabr
      numberOfDays = 30;
      break;
    case 2: // Fevral
      numberOfDays = 28;
      break;
    default:
      numberOfDays = -1;
  }
  return numberOfDays;
}
let month = 2;
let days = findNumberOfDays(month);
console.log(" bu oyda " + days + " kun bor.");
