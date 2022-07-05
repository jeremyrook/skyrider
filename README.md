# Why Skyrider

The person I look up to most is my grandfather. When the internet was coming out for public use, he tried to claim the tag "Skyrider" for his online presence.

## Installation

Use the [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or similar package manager to install skyrider.

```bash
git clone jeremyrook/skyrider.git
```

## Frameworks and Libraries

This was created with the toolchain Gatsby (https://www.gatsbyjs.com/why-gatsby/), along with customized ANT Design library (https://ant.design/).

# Errors I solved in project 

1. Be careful of imports:
- I exported default Layout but imported it on <Profiles> in brackets.

2. Fetching APIs
-  Fetch function does not directly return the JSON response body but instead returns a promise that resolves with a Response object. To extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON.
- I console.log the first promise so the second .then was based off the console instead of the actual return.