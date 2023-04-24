const importedModule = require("./index.js");
const { extractAndWrite } = require(".");
const importedFunction = importedModule.extractAndWrite;

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

importedFunction(test1);
