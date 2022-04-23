# Storybook
## An example of storybook

This repository contains a very simple React application and a Storybook application with the components that are used.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.

    .
    ├── .storybook
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/storybook`**: This directory contains configuration files about storybook.

2.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

3.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

6. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

7. **`README.md`**: A text file containing useful reference information about the project.


## 🤝 Initial Setup for the whole project
1. Install [Node.js (v14 or newer)](https://nodejs.dev/learn).
2. Navigate to your workspace and clone this repository.
3. Navigate in the cloned repository folder.
4. Install npm dependencies: <br>
   `npm install`


## 🚀 Start React App and Storybook locally
1. Start the React App:<br>
   `npm start`
2. Start Storybook:<br>
   `npm run start:storybook`
3. Visit [http://localhost:3000/](http://localhost:3000/) for the React App
4. Visit [http://localhost:6006/](http://localhost:6006/) for Storybook

## 👷 Build React App and Storybook
1. Build the React App (build folder will be created):<br>
   `npm run build`
2. Build Storybook (storybook-build folder will be created):<br>
   `npm run build:storybook`

## 🎯 Testing
Testing contains unit tests, snapshot tests and image snapshot tests. The last two need a storybook running or having been built
1. Run tests using the local running instance of storybook:<br>
   `npm run test:dev`
2. Run tests using a built instance of storybook:<br>
   `npm run test:static`
3. Run tests using the production instance of storybook:<br>
   `npm run test:prod`

## 💫 Deploy

React App and Storybook are both deployed using Netlify
<a href="https://www.netlify.com/">
<img alt="Netlify" src="https://www.netlify.com/img/deploy/button.svg" width="60" />
</a>

React App URL: [https://ck-storybook-app.netlify.app/](https://ck-storybook-app.netlify.app/)

Storybook URL: [https://ck-storybook.netlify.app/](https://ck-storybook.netlify.app/)

##

<a href="https://storybook.js.org/" traget="_blank"><img src="https://nx.dev/documentation/shared/storybook-logo.png" height="30px"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://reactjs.org/" traget="_blank"><img src="https://images.squarespace-cdn.com/content/v1/5ef56924f721cc6e71bb226f/1614091628862-QP0JF4BRBEGZD3TDDWFR/React.js+eLearning.png" height="30px"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://netlify.app/" traget="_blank"><img src="https://flaviocopes.com/netlify/netlify-logo.png" height="30px"/></a>

