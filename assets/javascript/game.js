
window.onload = function what(){
var win = 0;
document.getElementById("win").innerHTML = "win =  " +   win;
var losse = 0;
document.getElementById("losse").innerHTML ="losse = " + losse;
var geuessleft = 9;
document.getElementById("geuessleft").innerHTML ="geuessleft = " + geuessleft;

document.onkeypress = function(enterkey){
    var userGuess = enterkey.key;
document.getElementById("userGuess").innerHTML ="userGuess = " + userGuess;
}

var correctword = [];

var wordlist = [ "cat", "dog", "tiger", "elephent"]
var compick = wordlist[Math.floor(Math.random() * computerChoices.length)];

for(i=0; i<wordlist.length; i++)
{
    for(i=0; i<compick; i++)
    {
        if(userGuess !== compick(i))
        {
            losse = loose + 1
        }
        else if(userGuess == compick(i))
        {
            correctword(i)= userGuess;
            document.getElementById("correctword").innerHTML ="correctword = " + correctword;
        }
    }

}




}

