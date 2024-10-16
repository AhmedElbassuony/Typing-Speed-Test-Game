// Array Of Words
const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];

// Setting Level
const lvls = {
  Easy: 7,
  Normal: 5,
  Hard: 3,
};

// Default Level
let defaultLevel = "Normal"; // Change Level From Here
let defaultLevelSeconds = lvls[defaultLevel];

// Catch Selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let gotedScore = document.querySelector(".score .got");
let totalScore = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// Set Game Option
lvlNameSpan.innerHTML = defaultLevel;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
totalScore.innerHTML = words.length;

// Disable Paste in input
input.onpaste = () => {
  return false; // prevent the default paste action. // i can usr it to all Events
};

// Start Game
startButton.onclick = function () {
  this.remove(); // i Started The Game
  input.focus();
  // Generate Word Function
  genWord();
};

function genWord() {
  // Get randome Word From Arra
  // let randomeIndex =  parseInt((Math.random() * words.length) % 30);
  let randomeIndex = Math.floor(Math.random() * words.length) % 30;
  let randomeWord = words[randomeIndex];

  // Show The Word
  theWord.innerHTML = randomeWord;

  // Remove The Word From Array
  words.splice(randomeIndex, 1);

  // Add The Rest Of Words To UpcomingWords
  let upcomingWordsContent = "";
  for (let i = 0; i < words.length; i++) {
    upcomingWordsContent += `<div>${words[i]}</div>`;
  }
  upcomingWords.innerHTML = upcomingWordsContent;

  // Elzero Way
  // Empty upcoming Words
  // upcomingWords.innerHTML = "";
  // for (let i = 0; i < words.length; i++) {
  //   // Create Div Element
  //   let div = document.createElement("div");
  //   let txt = document.createTextNode(words[i]);
  //   div.appendChild(txt);
  //   upcomingWords.appendChild(div);
  // }

  // Start Play
  startPlay();
}

function startPlay() {
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      clearInterval(start);
      // Comapre Words
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        // Empty input Field
        input.value = "";
        // increase Score
        gotedScore.innerHTML++;
        if (words.length) {
          // Take Another Word
          genWord();
        } else  { // The End Of The Game
          let span = document.createElement("span");
          span.className = "good";
          let spanText = document.createTextNode("Winner");
          span.appendChild(spanText);
          finishMessage.appendChild(span);
        }
      } else {
        let span = document.createElement("span");
        span.className = "bad";
        let spanText = document.createTextNode("Game Over");
        span.appendChild(spanText);
        finishMessage.appendChild(span);
      }
    }
  }, 1000);
}
