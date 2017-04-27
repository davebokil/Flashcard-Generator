// NPM Packages
var inquirer = require("inquirer");
var fs = require("fs");

// parse argv
var input = process.argv[2]

// require the json file of questions
var questions = require("./questions.json");

// counter for correct and wrong answers
var correct = 0
var wrong = 0

// Opening Dialogue when node app.js is run
console.log("\n")
console.log("=======================================")
console.log("  Welcome to the Flashcard Generator!")
console.log("=======================================")
console.log("To get started, run this js file with the arguement 'basic' or 'cloze'")
console.log("\n")

if (input === "basic") {
    inquirer.prompt([{
        type: 'input',
        name: 'first_question',
        message: questions.basic[0].front
    }, {
        type: 'input',
        name: 'second_question',
        message: questions.basic[1].front
    }, {
        type: 'input',
        name: 'third_question',
        message: questions.basic[2].front
    }, {
        type: 'input',
        name: 'fourth_question',
        message: questions.basic[3].front
    }, {
        type: 'input',
        name: 'fifth_question',
        message: questions.basic[4].front
    }]).then(function(user) {
        // console.log(JSON.stringify(user, null, 2));
        if (user.first_question.toLowerCase() === questions.basic[0].back) {
            correct++
        }
        if (user.second_question.toLowerCase() === questions.basic[1].back) {
            correct++
        }
        if (user.third_question.toLowerCase() === questions.basic[2].back) {
            correct++
        }
        if (user.fourth_question.toLowerCase() === questions.basic[3].back) {
            correct++
        }
        if (user.fifth_question.toLowerCase() === questions.basic[4].back) {
            correct++
        }
        console.log("total number correct: " + correct)
    });


} else if (input === "cloze") {

inquirer.prompt([{
        type: 'input',
        name: 'first_question',
        message: questions.cloze[0].front
    }, {
        type: 'input',
        name: 'second_question',
        message: questions.cloze[1].front
    }, {
        type: 'input',
        name: 'third_question',
        message: questions.cloze[2].front
    }, {
        type: 'input',
        name: 'fourth_question',
        message: questions.cloze[3].front
    }, {
        type: 'input',
        name: 'fifth_question',
        message: questions.cloze[4].front
    }]).then(function(user) {
        // console.log(JSON.stringify(user, null, 2));
        if (user.first_question.toLowerCase() === questions.cloze[0].back) {
            correct++
        }
        if (user.second_question.toLowerCase() === questions.cloze[1].back) {
            correct++
        }
        if (user.third_question.toLowerCase() === questions.cloze[2].back) {
            correct++
        }
        if (user.fourth_question.toLowerCase() === questions.cloze[3].back) {
            correct++
        }
        if (user.fifth_question.toLowerCase() === questions.cloze[4].back) {
            correct++
        }
        console.log("total number correct: " + correct)
    });
}
