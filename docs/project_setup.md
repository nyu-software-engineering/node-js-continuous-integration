The following commands were run to set up this project.  Altogether, these commands were used to generate the package.json configuration file, as well as install dependencies, and create directories where application and testing code will live.

Initialize an npm project in the current directory.  This creates a generic package.json file.  And create a src directory where our app code will live.
```bash
npm init
mkdir src
```

Install the mocha unit testing framework as a development dependency, and make a directory where test files will be saved.
```bash
npm install mocha --save-dev
mkdir test
```

Install the instanbul code coverage tool command line interface (CLI) named nyc as a development dependency.
```npm install nyc --save-dev```

Install the nodemon module as a development dependency.  Nodemon is used to automatically restart a Node application with any code change - this can save time:
`npm install nodemon --save-dev`

Install babel as a development dependency.  Babel allows us to write in ES6 syntax, but have it automatically transpiled to older ES5 syntax that Node requires.
```bash
npm install @babel/core @babel/node --save-dev
npm install @babel/preset-env --save-dev
```

Create an empty babel settings file:
`touch .babelrc`

Place the following contents into that `.babelrc` file:
```javascript
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

Place the following scripts into the package.json file. These scripts are shortcuts to the most common bash commands we will need to use while developing, testing, and starting our application.  Not having to write these commands from scratch every time saves us a lot of worry.
```javascript
  "scripts": {
    "start": "nodemon --exec babel-node src/index.js",
    "test": "mocha --require @babel/register",
    "test-with-coverage": "nyc --reporter=text mocha --require @babel/register"
  },
```

Once these scripts are in place, and the application and test code are placed in the appropriate directories, it is possible to start the application as follows.  This runs the application using nodemon which automatically restarts the application anytime the code changes.
```npm start```

And running any unit tests defined in the `tests` directory with mocha is achieved as follows:
```npm test```

And running mocha unit tests plus analyzing code coverage using istanbul is done by entering this command:
```npm run test-with-coverage```
