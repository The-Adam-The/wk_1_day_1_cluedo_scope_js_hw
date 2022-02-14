// Scope Homework: Who Dunnit

// Learning Objectives

// - Understand function scope
// - Know the difference in between the let and const keywords

// Brief

// Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.

// MVP

// Episode 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// Prediction: Miss Scarlet 





// Episode 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//Prediction: Professor Plum should be the murderer, as the murdered is originally defined with a 'const'
//Outcome: Correct, TypeError generated





// Episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

//Prediction: first verdict will be 'Mrs Peacock' and the second verdict will be 'Professor Plum', this is because
// the function will declare the murderer as 'Mrs Peacock' when called, but the second verdict is declared before the function
// is called due to hoisting.
//Outcome: First Verdict:  The murderer is Mrs. Peacock.
//        Second Verdict:  The murderer is Professor Plum.




// Episode 4


// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);



// Prediction: The string produced by the function will be different from the string produced at the end of the code block. In the string of suspects, the third suspect will be 'Col Mustard'
//            while in the string provided at the end the the third suspect will be 'Mrs. Peacock'. This is because the suspect list requires the variable defined by a function, while original suspectThree variable
//        will be defined by hoisting.
// Outcome:
//        The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
//          Suspect three is Mrs. Peacock.
        





// Episode 5


// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);


//Prediction: The verdict should 'revolver', as objects can be mutated despite being defined by a const.
//Outcome:  The weapon is the Revolver.





// Episode 6


// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


//Prediction: I think the murdered is 'Mrs White' due to the nested anonymous function in 'changeMurderer'.
//Outcome: The murderer is Mrs. White.




// Episode 7


// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


//Prediction: I think the murdered is 'Miss Scarlet', , the 'plottwist()' defines a new murderer by using 'let', and let variables cannot be redeclared. What I can't work out is if this invaldates the scope of
//'unexpectedOutcome()'
//Outcome: The murdered was 'Mr. Green', It seems that the scope of let is only one block.


// Episode 8


// const scenario = {
//   murderer: 'Mrs. Peacock', //'Col Mustard'
//   room: 'Conservatory', //'Dining Room'
//   weapon: 'Lead Pipe' //Candle Stick
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

//Prediction: I can't see any errors that make the above function produce a deceptive answers(but I expect there maybe one)
  //murderer: Col Mustard
  //room: Dining Room
  //*weapon: Candle Stick*
//Outcome: The weapon is Candle Stick.



// Episode 9


// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock'; // cannot redeclare a 'let' variable
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//Prediction: I think it's 'Prof Plum' as you cannot redeclare a 'let' variable. 
//Outcome:  The murderer is Professor Plum.

// Extensions



// Make up your own episode!
