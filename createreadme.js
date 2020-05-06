const buildReadMe = (answers) => {
    const readMeFile = `


# Project Title
${answers.title}

## Table of Contents:
- [Repository](#Repository)
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [License](#License)

## Description
${answers.description}

## Installation
${answers.install}

## Usage
${answers.usage}

## Contributors
${answers.contribution}

## Tests
${answers.tests}

## License
${answers.license}

`;

    return readMeFile;

};
module.exports = buildReadMe;