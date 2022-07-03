const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sqlite3 = require('sqlite3').verbose();

const indexRouter = require('./routes/index');

const app = express();
const port = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

let db = new sqlite3.Database('./db/test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the mydb database.');
    }
});

const dropQuery = `
    DROP TABLE IF EXISTS person
`;

const insertQuery = `
  CREATE TABLE IF NOT EXISTS person(
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name VARCHAR(100),
    user_password VARCHAR(100)
  )
`;

const dummyDataQuery = `
  insert into person(user_name, user_password) values 
    ('admin', 'rlarleo12^^')
`;

db.serialize(() => {
    db.each(dropQuery);
    db.each(insertQuery);
    db.each(dummyDataQuery);
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Close the database connection.');
    }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
