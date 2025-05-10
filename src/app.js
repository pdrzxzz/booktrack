const express = require('express');

// start server
const app = express();
//path to use __dirname and search views dir from app.js exec
const path = require('path');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const indexRoutes = require('./routes/index')
const booksRoutes = require('./routes/books')
app.use('/', indexRoutes)
app.use('/', booksRoutes)

// // if any other route do not match, throw error
// app.all('*', (req, res, next) => {
//     next(new ExpressError('Page Not Found', 404))
// })

//start listening
app.listen(3000, () => {
    console.log('Serving on port 3000')
})