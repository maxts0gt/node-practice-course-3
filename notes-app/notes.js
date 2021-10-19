const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (err) {
		return [];
	}
};

const addNote = (title, body) => {
	const notes = loadNotes();

	// const duplicateNotes = notes.filter((note) => note.title === title);
	const duplicateNote = notes.find((note) => note.title === title);

	if (!duplicateNote) {
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

const removeNote = (title) => {
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

const listNotes = () => {
	const notes = loadNotes();
	if (notes.length > 0) {
		console.log(chalk.cyan('Here is your notes: '));
		notes.forEach((note, i) => console.log(i + '. ' + note.title));
	} else {
		console.log('No notes found.');
	}
};

const readNote = (title) => {
	const notes = loadNotes();
	const match = notes.find((note) => note.title === title);
	if (!match) {
		console.log(chalk.red.bgWhite('Cannot find note by title: ' + title));
	} else {
		console.log(chalk.white.bgBlue(match.title));
		console.log(match.body);
	}
};

module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote,
};
