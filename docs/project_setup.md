## How this application was created
The following is an outline of the commands that were run to set up the application code of this project using the npm / node.js environment.  These commands were used to generate the package.json configuration file with the proper settings, as well as to install dependencies for unit testing and process monitoring, and to create directories where application and testing code will live.

## Create initial package.json configuration file
Initialize an npm project in the current directory.  This creates a generic package.json file.  And create a src directory where our app code will live.
```bash
npm init
mkdir src
```
Application source code files were then written and placed in this directory.

## Install code linter
Install the ESLint code linter for Javascript globally, and include it as a development dependency listed in the package.json configuration file.
```bash
npm install eslint --save-dev
```

Initialize the code linter... this will auto-create an ESLint settings file called `.eslintrc.json`.  Running this init command will ask several questions about what kind of checks you want the linter to do.  I've selected it to enforce syntax and style, to worry only about Node code, to use the "airbnb" lint style guide, and to keep the configuration file in json format.
```bash
./node_modules/.bin/eslint --init
```

To lint any code, you can either set up your IDE to auto-run ESLint, or manually run the linter on a file, such as
```
./node_modules/.bin/eslint src/index.js
```

## Install mocha unit testing framework
Install the mocha unit testing framework as a development dependency, and make a directory where test files will be saved.
```bash
npm install mocha --save-dev
mkdir test
```

Unit test files were then written and placed in this directory.

## Install istanbul code coverage utility
Install the instanbul code coverage tool command line interface (CLI) named nyc as a development dependency.
```bash
npm install nyc --save-dev
```

Install the nodemon module as a development dependency.  Nodemon is used to automatically restart a Node application with any code change - this can save time.  In this application, nodemon is not really necessary, but including here anyway for future reference.
```bash
npm install nodemon --save-dev
```

## Install babel javascript transpiler
Install babel as a development dependency.  Babel allows us to write in ES6 syntax, but have it automatically transpiled to older ES5 syntax that Node requires.
```bash
npm install @babel/core @babel/node --save-dev
npm install @babel/preset-env --save-dev
```

Create an empty babel settings file:
```bash
touch .babelrc
```

Place the following contents into that `.babelrc` file:
```javascript
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

Babel will now transpile the ES6 code to ES5 prior to execution.

## Set up test and launch scripts
Place the following scripts into the package.json file. These scripts are shortcuts to the most common bash commands we will need to use while developing, testing, and starting our application.  Not having to write these commands from scratch every time saves us a lot of worry.
```javascript
  "scripts": {
    "start": "nodemon --exec babel-node src/index.js",
    "test": "mocha --require @babel/register",
    "test-with-coverage": "nyc --reporter=text mocha --require @babel/register"
  },
```

Other scripts were also added for convenience, as you'll see in the actual package.json file.  However, these are the key scripts to start, test, and do code coverage analysis.

## Start the app
Once these scripts are in place in the package.json, and the application and test code are placed in the appropriate directories, it is possible to start the application as follows.  This runs the application using nodemon which automatically restarts the application anytime the code changes.
```bash
npm start
```

## Test the app
And running any unit tests defined in the `tests` directory with mocha is achieved as follows:
```bash
npm test
```

## Test with code coverage
And running mocha unit tests plus analyzing code coverage using istanbul is done by entering this command:
```bash
npm run test-with-coverage
```

