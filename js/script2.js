var promptSentence= prompt("What is your code?");

var beginEndCap= function(initials){
  return (initials.match(/.$/)[0]+initials.match(/^./)[0]).toUpperCase();
}

var sentencePlus= function(sentitials){
  return (sentitials+beginEndCap(sentitials));
}

var lastStep= function(last){

  var middle = last.match(/\S/g).length/2;

  var middleRoundDown = Math.floor(middle);

  return last.match(/\S/g)[middleRoundDown];

}

var reverseStep= function(reverse){
  return reverse.split("").reverse().join("");
}

$(document).ready(function() {
  $("img").click(function() {
    alert(promptSentence);
  });
  $("p").click(function() {
    alert(reverseStep(lastStep(promptSentence)+sentencePlus(promptSentence)));
  });
});
