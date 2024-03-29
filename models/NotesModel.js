const mongoose = require('mongoose');


//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated
const NoteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true
    },
    noteDescription: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        validate(value){
            if (value != "HIGH" && value != "LOW" && value != "MEDIUM"){ throw new Error("Wrong value ");}
        }
    },
    dateAdded: {
        type: String,
        required: true
    },
    dateUpdated: {
        type: String,
        required: true
    },
});

const Note = mongoose.model("note", NoteSchema);
module.exports = Note;