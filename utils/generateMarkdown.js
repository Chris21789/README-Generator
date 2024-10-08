// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";

  if (license === "MIT") {
    licenseBadge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "APACHE 2.0") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    licenseBadge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD 3") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    license === "None";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";

  if (license === "MIT") {
    licenseLink = "https://opensource.org/license/MIT";
  } else if (license === "APACHE 2.0") {
    licenseLink = "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL 3.0") {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "BSD 3") {
    licenseLink = "https://opensource.org/license/BSD-3-Clause";
  } else {
    license === "None";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);

  if (license !== "None") {
    return `
## License

${licenseBadge}[${license}](${licenseLink})
    `;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;
  let renderLicense = renderLicenseSection(license);

  return `
  
# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

>${data.dependencies}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

>${data.tests}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [https://www.github.com/${data.githubName}](https://www.github.com/${data.githubName}).

${renderLicense}

`;
}

module.exports = generateMarkdown;
