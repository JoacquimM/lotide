/*
 Importing from the export of assertEqual.js spo the test code wont 
 be ran where the function code is being required(imported).
*/

const assertEqual = require('../assertEqual.js') 
// testcode from assertEqual.js below

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);