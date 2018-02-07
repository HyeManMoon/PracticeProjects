const fs = require("fs");
const _ = require("lodash");
const yargs = require('yargs');

const notes = require('./notes');

const titleOption = {
    describe: "Title of note",
    demand: true,
    alias: 't'
};
const bodyOption = {
    describe: "Text of note",
    deman: true,
    alias: 'b'
};
const argv = yargs.command('add','Add a new note', {
    title: titleOption,
    body: bodyOption
}).command('list','List all notes').command('read','Read a note', {
    title: titleOption
}).help().command('remove', 'Remove a note', {
    title: titleOption
}).argv;
var command = argv._[0];

if(command === 'add') {
var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log("Note Created")
        notes.logNote(note);
    } else {
        console.log("Note Title Taken")
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note)=> notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log("Note Found")
        notes.logNote(note);
        console.log('Note found');
    } else {
        console.log('Note not found');
    }
} else if( command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}   