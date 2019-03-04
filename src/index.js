// import the readline module so we can get user input from the command line easily
import readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout); // set up stdin and stdout

// set up an array of options we will present the user in a menu
const menuOptions = [
  // each option is an object containing an id number, a title, 
  // a file to be imported if the option is selected, and 
  // a confirmation message for when the user picks it
  {
    id: 1,
    title: 'import/export example',
    import: './importing_exporting_example/index.js',
    confirmationMessage: 'Good choice!',
  },
  {
    id: 2,
    title: 'objects and classes example',
    import: './objects_classes_example/index.js',
    'confirmation-message': 'Well done!',
  },
  {
    id: 3,
    title: 'functions example',
    import: './functions_example/index.js',
    'confirmation-message': 'Yes!',
  },
  {
    id: 4,
    title: 'promises example',
    import: './promises_example/index.js',
    'confirmation-message': 'Okay!',
  },
];

/**
 * This function generates a menu of options to present to the user, 
 * based on the menuOptions array defined globally above
 */
function getMenu() {
  let menu = '\nWhich would you like to run?\n\n';

  // loop through all the menu options in the array
  menuOptions.forEach((val, index) => {
    // add this menu option as a line to the string of menu options
    menu += `\t${val.id} - ${val.title}\n`;
  });

  menu += '\nEnter your choice: ';
  return menu;
}

// ask the user which examples they would like to run
rl.question(getMenu(), (userChoice) => {
  // import the file corresponding with the option the user selected

  // loop through all the menu options in the array
  menuOptions.forEach((val, index) => {
    // if this is the menu item the user selected...
    if (userChoice == val.id) {
      // output a corresponding confirmation message
      console.log(`${val.confirmationMessage}  Loading '${val.title}' now...\n`);
      console.log(`###########start ${val.title}###########\n`);
      // import the file that corresponds with the user's choice
      require(val.import);
      console.log(`\n############end ${val.title}############\n`);
    }
  });
});
