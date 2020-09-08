function LetterChange(str) {
    for (var i = 0; i < str.length; i++) {
        if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 123) {
            str = str.replace(str.charAt(i), String.fromCharCode(str.charCodeAt(i) + 1));
        }
    }
    return str;
}

console.log (LetterChanges("zzzz"))