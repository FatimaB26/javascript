function squareRoot(num) {

    var num;

    for (var i = num; i >= 1; i--) {

        if (i * i === num) {
            num = i;
            break;
        }

    }

    return num;
    
}

console.log(squareRoot(25))
console.log(squareRoot(16))