// var obj = {
//     name: 'Henry'
// };

// var stringObj = JSON.stringify(obj);


// var personStr = '{"name": "Henry","age": 24}';

// var person = JSON.parse(persontStr);


const fs = require('fs');

var originalNote = {
    title: 'some title',
    body: 'some body'
}

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);
console.log( typeof note);
console.log(note.title);  