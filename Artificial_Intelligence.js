// this is AI that works like Siri or CleverBot
var ai = prompt("Hello! How may i help you?");
switch (ai) {
  case "Go to Youtube.":
    window.location = "http://www.youtube.com";
    break;
  case "Go to Google.":
    window.location = "https://www.google.com";
    break;
  case "Hi.":
    alert("Hello!");
    break;
     case "Go to Twitter":
  window.location = "https://www.twitter.com";
    break;
  case "Cake.":
  alert("The cake is a lie!");
    break;
  case "Hello.":
    alert("Hi!");
    break;
  case "Who are you?":
    console.log("It dosen't matter.");
    break;
  default:
    alert("Sorry, I didn't understand.");
}
console.log("Hello!");
