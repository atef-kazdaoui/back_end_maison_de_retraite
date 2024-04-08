var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const resident_inscription_router=require('./routes/resident.router');
const visiteur_inscription_router=require('./routes/visiteur.router');
const rendez_vous_router=require('./routes/rendez_vous')
var app = express();
require('dotenv').config();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/resident',resident_inscription_router);
app.use('/visiteur',visiteur_inscription_router);

app.use(function (req, res, next) {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Votre app est disponible sur localhost: ${PORT} !`));

module.exports = app;


