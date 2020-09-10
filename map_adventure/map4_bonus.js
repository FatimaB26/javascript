function isEven(num) {

    if(num % 2 == 0)
                console.log("true");
    else
                console.log("false");

}

var arr = [1, 2, 3, 4]
var arr2 = arr.map(isEven(num))

console.log(arr2);