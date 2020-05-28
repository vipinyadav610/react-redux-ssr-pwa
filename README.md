# react-redux-ssr-pwa

[![React](https://img.shields.io/badge/dynamic/json?style=flat&colorB=DF01D7&label=React&prefix=v&query=dependencies.react&logo=react&url=https%3A%2F%2Fraw.githubusercontent.com%2FSoFriendly%2Fyac-mobile%2FReleaseBranch%2Fpackage.json%3Ftoken%3DACCU4SJ6TGYZYKMWFCRNEQS5MYKTG)](https://reactjs.org/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat&colorB=398339)](http://standardjs.com/)

react-redux-ssr-pwa is hacker news clone having various feature to show feeds list with pagination.
you can hide any feed if you don't want to see anymore.

**_Note:_** Copy the `.env.example` file and rename it to `.env.development` for development and `.env.production` for production, then replace it with the required variables and then run the project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- node (version 10 or above)
- npm (version 6.10.3 or above)
- yarn (recommended)

## Run the project locally

1. Clone the project and install the dependencies:

   > \$ git clone https://github.com/vipinyadav610/react-redux-ssr-pwa.git

   > \$ cd react-redux-ssr-pwa

   > \$ npm install

2. In the project directory, you can run folllowing command for installing dependencies present in the `package.json`.

   > ​ yarn or npm install

3. Runs the app in the development mode. By default, `NODE_ENV` is set to `development`

   > yarn dev Or npm run dev

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

**_Note:_** Please set the port in env file to run app on that particular port

## Tasks available

1. Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance. By default `NODE_ENV` is set to `production`. The build is minified and the filenames include the hashes. Your app is ready to be deployed.

> npm run build

## Coding Style used

- [React App coding style](https://www.npmjs.com/package/eslint-config-react-app/)

**_Note:_** It is absolutely compulsory to add a [pre-commit hook](https://prettier.io/docs/en/precommit.html) to your project in this manner.

## Lighthouse perfomance

![alt text](https://github.com/vipinyadav610/react-redux-ssr-pwa/blob/feature/optimize-lighthouse-perfomance/lighthouse.jpg?raw=true)
