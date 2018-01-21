function fizzbuzz() {
    let s = "";
    for (i = 1; i < 100; i++) { 
        s = s + convertFizzBuzz(i) + "\n"
    }
    return s;
}

function convertFizzBuzz(number) {

    let convertResult = "";
    if (number % 3 == 0) {
        convertResult += "Fizz";
    }
    if (number % 5 == 0) {
        convertResult += "Buzz";
    }
    if (convertResult.length == 0) {
        convertResult = number;
    } 
    return String(convertResult);
}

alert(fizzbuzz());