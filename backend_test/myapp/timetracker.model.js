const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Timetracker = new Schema({
    timetracker_task: {
        type: String
    },
    timetracker_starttime: {
        type: String
    },
    timetracker_endtime: {
        type: String
    }
});

module.exports = mongoose.model('Timetracker', Timetracker);