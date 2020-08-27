function vowelCount(str) {
    
    var voyelles = 'aeiouy';
    var compteur = 0
    for (var i = 0; i < str.length; i++) {
        if (voyelles.includes(str[i])) {
            compteur = compteur + 1
        }
    }
    return compteur
}

console.log(vowelCount('aeiouy'))