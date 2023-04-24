const inquirer = require("inquirer");
const fs = require("fs");

// const init = async () => {
//   try {
//     await getUserData();
//     await extractAndWrite();
//   } catch (err) {
//     console.log(err);
//   }
// };
// title, description, table of contents, installation, usage, license, contributing, tests, questions
const getUserData = () => {
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
        name: "motivation",
        message: "What were your motivations for creating the project?",
      },
      {
        type: "input",
        name: "challenges",
        message: "What were some challenges you faced?",
      },
      {
        type: "input",
        name: "installation",
        message:
          "What are the steps to install your project? Provide a step-by-step.",
      },
      {
        type: "input",
        name: "usage",
        message:
          "What are some instructions and examples for use of this project?",
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license does your project use?",
        choices: [
          "Apache",
          "BSD-Clause",
          "GNU",
          "MIT",
          "MPL-2.0",
          "CDDL",
          "EPL",
        ],
      },
      {
        type: "input",
        name: "contribution",
        message: "Who contributed on your project? (include Github profiles)",
      },
      {
        type: "input",
        name: "tests",
        message:
          "Are there any tests for this project? If so, how do you run them?",
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
    .then((response) => {
      extractAndWrite(response);
      console.log(response);
    });
};

// title, description, table of contents, installation, usage, license, contributing, tests, questions
const extractAndWrite = (response) => {
  console.log(response);
  const mdString = `
  # ${response.title}
  
  ![Badge](https://img.shields.io/static/v1?label=License&message=${response.license}&color=<GREEN>)
  
  ## Description
  **Here is a short description of this project:**
  ${response.description}
  
  **My motivation for making this was:**
  ${response.motivation}
  
  **Some challenges I faced were:**
  ${response.challenges}
  
  
  ## Table of Contents
  
  1.[Installation](#installation)
  
  2.[Usage](#usage)
  
  3.[License](#license)
  
  4.[Contributing](#contributing)
  
  5.[Tests](#tests)
  
  6.[Questions](#questions)
  
  ## Installation
  Here's a step by step for how to install this project:
  
  ${response.installation}
  
  ## Usage
  
  Here are some instructions and examples of use for our project:
  
  ${response.usage}
  
  ## License
  
  ${response.license}
  
  ## Contributing
  
  Huge thanks to these individuals, see respective Github profiles:
  
  ${response.contribution}
  
  ## Tests
  
  Here are the tests we implemented for the project:
  
  ${response.tests}
  
  ## Questions
  
  Here is my personal Github Repo, with relevant links:
  
  [${response.github}](https://github.com/${response.github})
  
  For any other questions, please feel free to follow up with me at my email address:
  
  ${response.email}
  
  `;

  console.log("response", JSON.stringify(response));
  fs.writeFileSync("README.md", mdString, (err) => {
    if (err) {
      throw err;
    }
  });
};

getUserData();

//**testing function **
// exports.extractAndWrite = (response) => {
//   console.log(response);
//   const mdString = `
// # ${response.title}

// ![Badge](https://img.shields.io/static/v1?label=License&message=${response.license}&color=<GREEN>)

// ## Description
// **Here is a short description of this project:**
// ${response.description}

// **My motivation for making this was:**
// ${response.motivation}

// **Some challenges I faced were:**
// ${response.challenges}

// ## Table of Contents

// 1.[Installation](#installation)

// 2.[Usage](#usage)

// 3.[License](#license)

// 4.[Contributing](#contributing)

// 5.[Tests](#tests)

// 6.[Questions](#questions)

// ## Installation
// Here's a step by step for how to install this project:

// ${response.installation}

// ## Usage

// Here are some instructions and examples of use for our project:

// ${response.usage}

// ## License

// ${response.license}

// ## Contributing

// Huge thanks to these individuals, see respective Github profiles:

// ${response.contribution}

// ## Tests

// Here are the tests we implemented for the project:

// ${response.tests}

// ## Questions

// Here is my personal Github Repo, with relevant links:

// [${response.github}](https://github.com/${response.github})

// For any other questions, please feel free to follow up with me at my email address:

// ${response.email}

// `;

//   console.log("response", JSON.stringify(response));
//   fs.writeFileSync("README.md", mdString, (err) => {
//     if (err) {
//       throw err;
//     }
//   });
// };
//   This is a readme generator CLI, taking in user input and creating a README based on that

//   As a user, I wanted a quick way to create my readme to make the steps of creating future projects more efficient

//   Getting the right prompts to really round out what I wanted to portray in any given readme, and making sure all the bases were covered.

//   Create file - create a pakage.json - install inquirer - run index.js

//   This is a very useful project, it is applicable to any given project that requires a readME, and will be used early on in the project to create a filled template.

//   https://github.com/RyanWood2334

//   ryanwood_2334@yahoo.com
const test1 = {
  title: "README generator",
  description:
    "This is a readme generator CLI, taking in user input and creating a README based on that",
  motivation:
    "As a user, I wanted a quick way to create my readme to make the steps of creating future projects more efficient",
  challenges:
    "Getting the right prompts to really round out what I wanted to portray in any given readme, and making sure all the bases were covered.",
  installation:
    "Create file - create a pakage.json - install inquirer - run index.js",
  usage:
    " This is a very useful project, it is applicable to any given project that requires a readME, and will be used early on in the project to create a filled template.",
  license: "MIT",
  contribution: "https://github.com/RyanWood2334",
  tests: "No tests",
  github: "RyanWood2334",
  email: "ryanwood_2334@yahoo.com",
};
