function firstReverse(str) {

    var dep = "";

    for (var i = str.length - 1; i >= 0; i--) {

        dep += str[i];

    }

    return dep;

}

console.log (firstReverse('konexio'));