const inquirer = require("inquirer");
const fs = require("fs");

// title, description, table of contents, installation, usage, license, contributing, tests, questions

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a little bit describing your project",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do do you use your project?",
    },
    {
      type: "input",
      name: "license",
      message: "What kind of license does your project use?",
    },
    {
      type: "input",
      name: "contribution",
      message: "Who contributed on your project?",
    },
    {
      type: "input",
      name: "tests",
      message: "Any tests implemented?",
    },
    {
      type: "input",
      name: "github",
      message: "What's Your Github address?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ])
  // title, description, table of contents, installation, usage, license, contributing, tests, questions
  .then((response) => {
    const mdString = `
    
    `;

    console.log("response", JSON.stringify(response));
    fs.writeFile("README.md", mdString, (err) => {
      if (err) {
        throw err;
      }
    });
  });
