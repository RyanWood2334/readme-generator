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
      message: "How do you use your project?",
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
      message: "How do you test your application?",
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
# ${response.title}

## Description

${response.description}

## table of Contents

1.[Installation](#Installation)

2.[Usage](#Usage)

3.[License](#License)

4.[Contributing](#Contributing)

5.[Tests](#Tests)

6.[Questions](#Questions)

## Installation

${response.installation}

## Usage

${response.usage}

## License

${response.license}

## Contributing

${response.contributing}

## Tests

${response.tests}

## Questions

<${response.github}>
<${response.email}>

`;

    console.log("response", JSON.stringify(response));
    fs.writeFile("README.md", mdString, (err) => {
      if (err) {
        throw err;
      }
    });
  });
