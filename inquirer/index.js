import inquirer from 'inquirer';

let questions = [
{
    type : "input",
    name : "sender.email",
    message : "Sender's email address - "
},
{
    type : "input",
    name : "sender.name",
    message : "Sender's name - "
},
{
    type : "input",
    name : "subject",
    message : "Subject - "
}];

inquirer.prompt(questions).then(function (answers) {
    console.log(answers);
});