"use strict";

const fizzNum = document.getElementById("fizz-num");
const buzzNum = document.getElementById("buzz-num");
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", calFizzBuzz, false);

function calFizzBuzz() {
  console.log(fizzNum.value);
  console.log(buzzNum.value);

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
  if (
    !Number.isInteger(Number(fizzNum.value)) ||
    !Number.isInteger(Number(buzzNum.value))
  ) {
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

  fizzNum.value = "";
  buzzNum.value = "";
}
