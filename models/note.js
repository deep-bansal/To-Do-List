const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema ({
    color: {
        type: String,
        required: true

    },
    

    note : {
        type: String,
        required: true

    },

    duedate: {
        type: Array,
        required: true
    },

    category: {
        type:String,
        required: true

    }, 
    markComp: {
        type: String
    }
});

//compiling schema in model
const Note = mongoose.model('Note',noteSchema);

module.exports = Note;
