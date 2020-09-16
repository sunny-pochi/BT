"use strict";

const fizzNum = document.getElementById("fizz-num");
const buzzNum = document.getElementById("buzz-num");
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", calFizzBuzz, false);
// const newFizz = parseInt(fizzNum.value);
// const newBuzz = parseInt(buzzNum.value);

function calFizzBuzz() {
  console.log(fizzNum.value);
  console.log(buzzNum.value);
  // console.log(newFizz);
  // console.log(newBuzz);
  console.log(Number.isInteger(parseInt(fizzNum.value)));
  console.log(Number.isInteger(parseInt(buzzNum.value)));

  console.log(!fizzNum.value.match(/[^0-9]+/));

  if (!fizzNum.value || !buzzNum.value) {
    alert("文字を入力してください");
    return;
  }
  if (isNaN(Number(fizzNum.value))) {
    alert("数字を入力してください");
    return;
  }
  if (isNaN(Number(buzzNum.value))) {
    alert("数字を入力してください");
    return;
  }

  // } else if (!fizzNum.value.match(/[^0-9]+/)) {
  //   alert("整数値を入力してください");
  // } else if (!buzzNum.value.match(/[^0-9]+/)) {
  //   alert("整数値を入力してください");
  // }
  
  if (!Number.isInteger(Number(fizzNum.value))) {
    alert("整数値を入力してください");
    return;
  }
  if (!Number.isInteger(Number(buzzNum.value))) {
    alert("整数値を入力してください");
    return;
  }

  for (let i = 1; i < 100; i++) {
    if (i % (fizzNum.value * buzzNum.value) === 0) {
      const p = document.createElement("p");
      const pText = document.createTextNode("FizzBuzz" + i);
      pFizzBuzz.appendChild(p).appendChild(pText);
    } else if (i % fizzNum.value === 0) {
      const p = document.createElement("p");
      const pText = document.createTextNode("Fizz" + i);
      pFizzBuzz.appendChild(p).appendChild(pText);
    } else if (i % buzzNum.value === 0) {
      const p = document.createElement("p");
      const pText = document.createTextNode("Buzz" + i);
      pFizzBuzz.appendChild(p).appendChild(pText);
    }
  }

  // 入力部分を初期化で消去
  fizzNum.value = "";
  buzzNum.value = "";
}
