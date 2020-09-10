function firstFactorial(num) {

    var depart = 1;

    for (i = 2; i <= num; i++) {

        depart = depart * i

    }

    return depart;

}

console.log(firstFactorial(4));