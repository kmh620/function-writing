var capFirstLast = function(word) {
  // start here
  return (word[0]+word[word.length-1]).toUpperCase();
}

var reverseLetters =function(reverse){
  // step two
  return reverse.split("").reverse().join("");
}

var joiner = function(joiny) {
  return joiny+reverseLetters(capFirstLast(joiny));
}

var lastOne = function(last) {
  return last[Math.floor(last.length/2)]

}

var sentence = prompt ("What would you like to code today?");


// console.log("here sentence:" + sentence +"\nHeres last char: "+sentence[sentence.length-1]);

console.log(lastOne(sentence)+joiner(sentence))
