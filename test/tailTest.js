const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js'); // required tail() from tail.js in order to seperat test code of tail();



const words = ["Yo Yo", "Lighthouse", "Labs"]

tail(["Yo Yo", "Lighthouse", "Labs"]);
tail(words);
assertEqual(words.length, 3);