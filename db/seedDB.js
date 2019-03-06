const questions = [
  { answer: "dog", question: "hundo", next: 1 },
  { answer: "cat", question: "kato", next: 2 },
  { answer: "alligator", question: "kroigilo", next: 3 },
  { answer: "run", question: "kuri", next: 4 },
  { answer: "eat", question: "manĝi", next: 5 },
  { answer: "drink", question: "trinki", next: 6 },
  { answer: "good", question: "bona", next: 7 },
  { answer: "bad", question: "malbona", next: 8 },
  { answer: "happy", question: "feliĉa", next: 9 },
  { answer: "sad", question: "malĝoja" }
];

module.exports = { questions };


//mongo ds221155.mlab.com:21155/lingvo -u dev -p football12 utils/seed-database.js

//node utils/seed-database.js