const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((sentence) => {
    const words = sentence.split(" ");
    return words
      .map((ele) => {
        return ele.charAt(0).toUpperCase() + ele.slice(1);
      })
      .join(" ");

  });

};

console.log(titleCased());


// Some questions to consider:

// - How can we "iterate" through individual words in a string?
// - Can we execute an iteration inside an iteration? How?
// - How can we capitalize just the first letter in a word?

// A couple of hints:

// - Break the task into smaller chunks: using the console or a REPL, start by
//   figuring out how to modify one individual element in the `tutorials` array.
//   Once you've got that working, then figure out how to update the array itself.
// - Use Google!!


