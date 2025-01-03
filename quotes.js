const quoteCombinations = [
  {
    quoteCardColor: "#ffffff", // White
    backgroundGradient: "linear-gradient(135deg, #74ebd5, #acb6e5)", // Blue to purple
  },
  {
    quoteCardColor: "#f5f5f5", // Light gray
    backgroundGradient: "linear-gradient(135deg, #f6d365, #fda085)", // Peach to orange
  },
  {
    quoteCardColor: "#e3e3e3", // Medium gray
    backgroundGradient: "linear-gradient(135deg, #c1dfc4, #deecf7)", // Green to blue
  },
  {
    quoteCardColor: "#f0e6f6", // Light lavender
    backgroundGradient: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Sunset gradient
  },
  {
    quoteCardColor: "#d3f9f5", // Mint green
    backgroundGradient: "linear-gradient(135deg, #6a11cb, #2575fc)", // Purple to blue
  },
  {
    quoteCardColor: "#ffebcd", // Blanched almond
    backgroundGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Bold red to orange
  },
  {
    quoteCardColor: "#ffe4e1", // Misty rose
    backgroundGradient: "linear-gradient(135deg, #5f2c82, #49a09d)", // Purple to teal
  },
  {
    quoteCardColor: "#ffffff", // White
    backgroundGradient: "linear-gradient(135deg, #f5a623, #d86a5e)", // Orange to pink
  },
  {
    quoteCardColor: "#e4f1fe", // Soft blue
    backgroundGradient: "linear-gradient(135deg, #36d1dc, #5b86e5)", // Teal to blue
  },
  {
    quoteCardColor: "#f5f5f5", // Light gray
    backgroundGradient: "linear-gradient(135deg, #ff5858, #f09819)", // Red to yellow
  },
];

const quotes = [
  "The best way to predict the future is to invent it.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "Believe you can and you're halfway there.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Do what you can, with what you have, where you are.",
  "It always seems impossible until it’s done.",
  "The only way to do great work is to love what you do.",
  "Don’t watch the clock; do what it does. Keep going.",
  "You don’t have to be great to start, but you have to start to be great.",
];

const Authors = [
  "Alan Kay",
  "Winston Churchill",
  "Steve Jobs",
  "Theodore Roosevelt",
  "C.S. Lewis",
  "Theodore Roosevelt",
  "Nelson Mandela",
  "Steve Jobs",
  "Sam Levenson",
  "Zig Ziglar",
];

// Grab All Elements

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteCard = document.querySelector(".quote-card");

// Functions
function GenerateQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  //   console.log(index);
  quote.textContent = quotes[index];
  author.textContent = Authors[index];

  //   Change Colors
  quoteCard.style.backgroundColor = quoteCombinations[index].quoteCardColor;

  //   document.body.style.backgroundColor = quoteCombinations[index].backgroundGradient; // backgroundColor is used for solid colors.

  document.body.style.background = quoteCombinations[index].backgroundGradient; // background is used for both solid colors and gradients, which is why you should use background when assigning a gradient.
}

const IntervalID = setInterval(() => {
  GenerateQuote();
}, 3000);

setTimeout(() => {
  clearInterval(IntervalID);
}, 30000);
