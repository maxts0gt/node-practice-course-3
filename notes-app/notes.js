const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
	return 'Your notes...';
};

const addNote = function (title, body) {
	const notes = loadNotes();

	const duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push({
			title: title,
			body: body,
		});
		saveNotes(notes);
		console.log('New note added.');
	} else {
		console.log('Note title "' + title + '" exists.');
	}
};


const saveNotes = function (notes) {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (err) {
		return [];
	}
};

const removeNote = function (title) {
	const notes = loadNotes();

	const indexNumber = notes.findIndex((note) => note.title === title);
	console.log(indexNumber);
	if (indexNumber === -1) {
		console.log(chalk.red.bgWhite('Not notes found by the title ' + title));
	} else {
		console.log('Removing note ' + title);
		notes.splice(indexNumber, 1);
		saveNotes(notes);
	}
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
};
