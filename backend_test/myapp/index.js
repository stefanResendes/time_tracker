const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const timetrackerRoutes = express.Router();

let Timetracker = require('./timetracker.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/timetracker', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

timetrackerRoutes.route('/').get(function(req, res) {
    Timetracker.find(function(err, timetrackers) {
        if (err) {
            console.log(err);
        } else {
            res.json(timetrackers)
        }
    });
});

timetrackerRoutes.route('/delete/:id').delete(function(req, res) {
    Timetracker.deleteOne({_id: req.params.id }, function(err, result) {
        if (err) { 
            res.status(400).send("Delete not possible");
        } else {
            res.json("Timetracker id deleted!");
        }
    });
});

timetrackerRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Timetracker.findById(id, function(err, timetracker) {
        res.json(timetracker);
    });
});

timetrackerRoutes.route('/update/:id').post(function(req, res) {
    Timetracker.findById(req.params.id, function(err, timetracker) {
        if (!timetracker) {
            res.status(404).send("data is not found");
        } else {
            timetracker.timetracker_starttime = req.body.timetracker_starttime;
            timetracker.timetracker_endtime = req.body.timetracker_endtime;

            timetracker.save().then(timetracker => {
                res.json('Timetracker updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }

    });
});

timetrackerRoutes.route('/add').post(function(req, res) {
    let timetracker = new Timetracker(req.body);
    timetracker.save()
        .then(timetracker => {
            res.status(200).json({'timetracker': 'timetracker added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new timetracker failed');
        });
});

app.use('/timetracker', timetrackerRoutes);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))