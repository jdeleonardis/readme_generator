const inquirer = require("inquirer");
const fs = require("fs");
const createReadMe = require("./createreadme.js");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
{
  type: "input",
  message: "Enter a project title:",
  name: "title"
},
{
  type: "input",
  message: "Describe this project:",
  name: "description"
},
{
  type: "input",
  message: "How is this project installed?:",
  name: "install"
},
{
  type: "input",
  message: "How do you use this project?:",
  name: "usage"
},
{
  type: "input",
  message: "Who are the contributors to this project?:",
  name: "contribution"
},
{
  type: "input",
  message: "Enter any tests to be run:",
  name: "tests",
},
{
  type: "list",
  message: "License Selection:",
  name: "license",
  choices: ['MIT', 'Apache', 'GPL'],
  default: 'MIT'
}
];

async function writeFile() {
  try {
    const answers = await inquirer.prompt(questions)
    const returnedFile = createReadMe(answers);      
    await writeFileAsync("README.md", returnedFile);
  }
  catch (err) {
    console.log(err);
  }

}
writeFile();


