const num1 = 1;
const num2 = 4;
const arr1 = ["ahoj", "ne", "bebe", "cajthaml"]

const c = function oddOrEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else return false;
}

console.log(c(num1));

const b = function Max(number1, number2) {
    if (number1 > number2) {
        return number1;
    }
    else return number2
}

console.log(b(num1, num2));

const d = function isPrimeNum(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
        
    }
    return true;
}

console.log(d(num2));

const e = function wordWithA(array) {
    var a = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes("a")) {
            a.push(array[i])
        }
    }
    return a
}

console.log(e(arr1));