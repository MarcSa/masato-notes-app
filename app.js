const yargs = require('yargs');
const notes = require('./notes.js');

// customize yargs version
yargs.version('1.0.1')

/**
 * Create add command
 */
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Note title.',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

/**
 * Create remove command
 */
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Note title.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

/**
 * Create read command
 */
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    builder: {
        title: {
            describe: 'Note title.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

/**
 * Create list command
 */
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler(){
        notes.listNotes()
    }
})

yargs.parse()