const words = [
    "apple", "banana", "cherry", "dragon", "elephant", "flamingo", "giraffe", "honey", "igloo", "jelly",
    "kangaroo", "lemon", "mango", "narwhal", "octopus", "penguin", "quail", "rabbit", "strawberry", "tiger",
    "umbrella", "violet", "watermelon", "xylophone", "yak", "zebra", "astronaut", "balloon", "cactus", "dolphin",
    "eagle", "firefly", "guitar", "hiking", "island", "jungle", "koala", "lighthouse", "mountain", "nightingale",
    "ocean", "piano", "quasar", "rainbow", "sunflower", "telescope", "unicorn", "volcano", "whale", "yacht"
];

// Wait for DOM to load before attaching event listener
document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate-btn");
    
    if (generateButton) {
        generateButton.addEventListener("click", generateWords);
    } else {
        console.error("Button not found!");
    }
});

function generateWords() {
    const wordCountInput = document.getElementById("word-count");
    const wordList = document.getElementById("word-list");

    if (!wordCountInput || !wordList) {
        console.error("Word count input or word list not found!");
        return;
    }

    const wordCount = parseInt(wordCountInput.value, 10);

    if (isNaN(wordCount) || wordCount < 1 || wordCount > 50) {
        alert("Please enter a valid number between 1 and 50.");
        return;
    }

    wordList.innerHTML = ""; // Clear previous results

    for (let i = 0; i < wordCount; i++) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        const wordElement = document.createElement("div");
        wordElement.className = "word";
        wordElement.textContent = randomWord;
        wordList.appendChild(wordElement);
    }
}
