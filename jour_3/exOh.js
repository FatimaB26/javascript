function exOh(str) {

    var str = str.split ("");
        var nbrX = "x";
        var nbrO = "o";
        
        if (nbrX.length = nbrO.length) {
            return true
        } else {
        return false
    }
    }
    
    console.log (exOh("xxoo"));


//-------- autre methode

function exOh(str) {

    var str = str.split ("");
    var nbrX = "x";
    var nbrO = "o";
    for ( var i = 0 ; i < str.length ; i++) {
        if (nbrX.length === nbrO.length) {
            return true
        } else {
            return false
        }
    }
}
console.log (exOh("ooxxx"));

// autre methode

function exOh(str) {
    var str = "";
    str.search(/(x|o)/gi);
}

console.log (exOh("xxoo"));