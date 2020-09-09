var sentence = ""

function letterCapitalize (sentence) {

    var sentence = sentence.split (" ");
    var sentence = sentence.charAt(0)
    var sentence = sentence.toUpperCase()
    return sentence

}

var result = letterCapitalize ("bring your umbrella")

console.log (result)


// parcourir le tableau avec une boucle