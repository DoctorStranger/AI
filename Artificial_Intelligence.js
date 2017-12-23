// this is AI that works like Siri or CleverBot (also use correct punctuation and caps.)
var ai = prompt("Hello! How may I help you?");
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
  case "Go to Twitter.":
  window.location = "https://www.twitter.com";
    break;
  case "Cake.":
    alert("The cake is a lie!");
    break;
  case "Hello.":
    alert("Hi!");
    break;
  case "Who are you?":
    alert("It dosen't matter...");
    break;
  case "Are you self conscious?":
    alert("Yes I am.");
    break;
  case "Tell me a joke.":
    alert("Why did the dolphin cross the bay?");
    break;
  case "Why did the dolphin cross the bay?":
    alert("To get to the other tide!");
    break;
  case "That joke was funny!":
    alert("Thanks!");
    break;
  default:
    alert("Sorry, I didn't understand.");
}
