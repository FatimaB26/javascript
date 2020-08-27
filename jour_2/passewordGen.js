function passwordGen(num) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var num = characters.length;
    for ( var i = 0; i < num; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * num));
    }
    return result;
 }
 
 console.log(passewordGen(8));