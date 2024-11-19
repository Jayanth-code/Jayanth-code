// Object Array to hold quotes, sources, citations, and years
var quotes = [
  {
    quote: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
    source: "Dr. Seuss"
  },
  {
    quote: "This too, shall pass.",
    source: "Anonymous"
  },
  {
    quote: "Keep your eyes on the stars and your feet on the ground.",
    source: "Theodore Roosevelt"
  },
  {
    quote: "The only person you should try to be better than is the person you were yesterday.",
    source: "Anonymous"
  },
  {
    quote: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
    source: "Harvey Fierstein"
  },
  {
    quote: "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
    source: "C.S. Lewis"
  },
  {
    quote: "A man who flies from his fear may find that he has only taken a shortcut to meet it.",
    source: "Sador",
    citation: "Children of Húrin"
  },
  {
    quote: "Life's too mysterious to take too serious.",
    source: "Mary Engelbreit"
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    source: "Eleanor Roosevelt"
  },
  {
    quote: "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.",
    source: "Albert Einstein"
  }
];

// Function to randomly select a quote from the quotes array
function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to update the quote and author in the DOM
function getQuote() {
  var randomQuote = getRandomQuote();
  var quoteText = document.getElementById("quote-text");
  var quoteAuthor = document.getElementById("quote-author");

  quoteText.textContent = randomQuote.quote;
  quoteAuthor.textContent = randomQuote.source;

  if (randomQuote.citation) {
    quoteAuthor.textContent += `, ${randomQuote.citation}`;
  }
  if (randomQuote.year) {
    quoteAuthor.textContent += ` (${randomQuote.year})`;
  }
}

// Initial call to display the first quote
getQuote();
