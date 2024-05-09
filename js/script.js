var arrayOfQuotes = [
  {
    quote: '“Be yourself; everyone else is already taken.”',
    author: '― Oscar Wilde'
  },
  {
    quote: '“So many books, so little time.”',
    author: '― Frank Zappa'
  },
  {
    quote: '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”',
    author: '― Albert Einstein'
  },
  {
    quote: '“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.”',
    author: '― Bernard M. Baruch'
  },
  {
    quote: '“A friend is someone who knows all about you and still loves you.”',
    author: '― Elbert Hubbard'
  },
  {
    quote: '“It is better to be hated for what you are than to be loved for what you are not.”',
    author: '― Andre Gide, Autumn Leaves'
  }
];


var lastRandomIndex = -1; // -1 initially indicates that no quote has been selected yet.

function quotesGenrator() {
  var randomQuotes;

  // Generate a random index until it's different from the last one
  do {
    randomQuotes = Math.floor(Math.random() * arrayOfQuotes.length);
  } while (randomQuotes === lastRandomIndex); // is there to ensure that the same quote isn't selected consecutively, avoiding repetitions

  // Update lastRandomIndex
  lastRandomIndex = randomQuotes;

  document.getElementById("quoteOutput").innerHTML = `${`<span>Quote: </span>` + arrayOfQuotes[randomQuotes].quote}`;
  document.getElementById("authorName").innerHTML = `${`<span>Author: </span>` + arrayOfQuotes[randomQuotes].author}`;



}

