var nb1 = parseInt(process.argv[2])
var nb2 = parseInt(process.argv[4])
var op = process.argv[3]

if (process.argv.length !== 5) {
    console.log('error')
    return;
}

var opObj = {
    '+': function(chiffre1, chiffre2) {
        return chiffre1 + chiffre2
    },
    '-': function(chiffre1, chiffre2) {
        return chiffre1 - chiffre2
    },
    '/': function(chiffre1, chiffre2) {
        return chiffre1 / chiffre2
    },
    '%': function(chiffre1, chiffre2) {
        return chiffre1 % chiffre2
    },
    '*': function(chiffre1, chiffre2) {
        return chiffre1 * chiffre2
    }
}

console.log(opObj[op](nb1, nb2))
