import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import session from 'express-session';
import jwtService from './keys/JWT.service';


import './models/Place';
import './models/Area';
import './models/Device';
import './models/Target';
import './models/User';

// Load routes
import places from './routes/places';
import areas from './routes/areas';
import devices from './routes/devices';
import targets from './routes/targets';
import users from './routes/users';


// Map Global Promises
mongoose.Promise = global.Promise;

// Connect radar
mongoose.connect('mongodb://noam:Nmkl9634@ds139295.mlab.com:39295/radar-compie', {useNewUrlParser: true})
    .then(() => console.log('Mongo connected'))
    .catch(err => console.error(err));


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
}));

app.use(jwtService.middleware);

// Use routes
app.use('/places', places);
app.use('/areas', areas);
app.use('/devices', devices);
app.use('/targets', targets);
app.use('/users', users);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('server started on port ', port);
});
