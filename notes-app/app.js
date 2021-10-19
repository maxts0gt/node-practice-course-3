const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
		body: {
			describe: 'Note body',
			demandOption: true,
			type: 'string',
		},
	},
	handler: function (argv) {
		notes.addNote(argv.title, argv.body);
		// console.log("Adding a new note", argv)
	},
});

// Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
	},
	handler: function (argv) {
		// console.log('Removing a note', argv.title);
		notes.removeNote(argv.title);
	},
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log("Listing notes")
    }
})

// Create read command
yargs.command({
	command: 'read',
	describe: 'Read the note',
	handler: function () {
		console.log('Reading the note');
	},
});



// add, remove, read, list


// console.log(process.argv)
yargs.parse()
// console.log(yargs.argv)









// *****************************************************************************//
// const command = process.argv[2]
// if (command === 'add') {
//     console.log('Adding a note...')
// } else if (command === 'remove') {
//     console.log('Removing a note...')
// } else {
//     console.log('Not found...')
// }

// *****************************************************************************//

// const addFunction = require('./utils.js');
// result = addFunction(2, 3);
// console.log(result);

// *****************************************************************************//
// const noteFunction = require('./notes.js');
// returnedNote = noteFunction();
// console.log(returnedNote);

// *****************************************************************************//

// const validator = require('validator');
// console.log(validator.isEmail('max@max.com'));
// console.log(validator.isURL('haha.com'));

// console.log(chalk.white.bold.underline.bgBlue('Success!'));
