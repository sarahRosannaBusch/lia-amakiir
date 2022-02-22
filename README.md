# D&D 3.5e Druid Wild Shaper
An exercise in React and GitHub Pages. 

Basic character sheet for Lia Amakiir. Updates itself based on the chosen wild shape form.

# React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm install`

Installs project dependencies listed in package.json.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# GitHub Pages

Deployed on GitHub Pages using the following steps:

1. Install gh pages in the project's directory:
npm install gh-pages --save-dev

2. Add homepage, predeploy, and deploy fields to package.json

3. Create remote GitHub repo and initialize it as remote
git init
git remote add origin git@github.com:sarahRosannaBusch/lia-amakiir.git

4. Generate a production build and deploy it to gh-pages repo in GitHub
npm run deploy

Note: this will create a gh-pages branch and push only deployment code to it, so I switched my GitHub Pages settings to build it from there, keeping it separate from the source code in the main branch.

View app at: https://sarahrosannabusch.github.io/lia-amakiir/
