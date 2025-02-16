"use strict";

const calc = document.getElementById("calc");

const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const division = document.getElementById("division");

const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const multi = document.getElementById("multi");

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const minus = document.getElementById("minus");

const num0 = document.getElementById("num0");
const dot = document.getElementById("dot");
const clear = document.getElementById("clear");
const plus = document.getElementById("plus");
const equals = document.getElementById("equals");

let currentInput = "";
let operator = "";
let beforeInput = "";

function updateDisplay(num) {
    calc.textContent = num;
}

function clearInput() {
    currentInput = "";
    operator = "";
    beforeInput = "";
    updateDisplay("0");
}

function addNumber(num) {
    currentInput += num;
    updateDisplay(currentInput);
}

function addOperator(ope) {
    if (currentInput === "") {
        return;
    }
    if (beforeInput !== "") {
        calculate();
    }
    operator = ope;
    beforeInput = currentInput;
    currentInput = "";
}

function calculate() {
    let result;
    const before = parseFloat(beforeInput);
    const current = parseFloat(currentInput);

    if (isNaN(before) || isNaN(current)) {
        return;
    }

    switch (operator) {
        case "+":
            result = before + current;
            break;
        case "-":
            result = before - current;
            break;
        case "*":
            result = before * current;
            break;
        case "/":
            result = before / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = "";
    beforeInput = "";
    updateDisplay(currentInput);
}

function equalsProcess() {
    if (currentInput === "" || beforeInput === "") {
        return;
    }
    calculate();
}

num0.addEventListener("click", function () {
    addNumber("0");
});
num1.addEventListener("click", function () {
    addNumber("1");
});
num2.addEventListener("click", function () {
    addNumber("2");
});
num3.addEventListener("click", function () {
    addNumber("3");
});
num4.addEventListener("click", function () {
    addNumber("4");
});
num5.addEventListener("click", function () {
    addNumber("5");
});
num6.addEventListener("click", function () {
    addNumber("6");
});
num7.addEventListener("click", function () {
    addNumber("7");
});
num8.addEventListener("click", function () {
    addNumber("8");
});
num9.addEventListener("click", function () {
    addNumber("9");
});
dot.addEventListener("click", function () {
    addNumber(".");
});
plus.addEventListener("click", function () {
    addOperator("+");
});
minus.addEventListener("click", function () {
    addOperator("-");
});
multi.addEventListener("click", function () {
    addOperator("*");
});
division.addEventListener("click", function () {
    addOperator("/");
});

equals.addEventListener("click", equalsProcess);

clear.addEventListener("click", clearInput);