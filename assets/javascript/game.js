
window.onload = function what() {
    var win = 0;
    document.getElementById("win").innerHTML = "win =  " + win;
    var losse = 0;
    document.getElementById("losse").innerHTML = "losse = " + losse;
    var geuessleft = 9;
    document.getElementById("geuessleft").innerHTML = "geuessleft = " + geuessleft;
    var wordlist = ["a"]
    var compick = wordlist[Math.floor(Math.random() * wordlist.length)];
    var correctword = [];
    document.onkeypress = function (enterkey) {
        var userGuess = enterkey.key;
        document.getElementById("userGuess").innerHTML = "userGuess = " + userGuess;

       if (geuessleft !== 0) {
            if (userGuess !== compick) {
                geuessleft--;
            }
            else if (userGuess === compick) {
                correctword.push(compick);
                win++;
                geuessleft = 9;
            }

        }
        else if (geuessleft == 0) {
            geuessleft = 9;
            losse++;

        }

        
        document.getElementById("win").innerHTML = "win =  " + win;

        document.getElementById("losse").innerHTML = "losse = " + losse;

        document.getElementById("geuessleft").innerHTML = "geuessleft = " + geuessleft;
        document.getElementById("correctword").innerHTML = "correctword = " + correctword;
        
    }
}

