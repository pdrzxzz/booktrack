const express = require('express');
const router = express.Router();

const connection = require('../../db')

router.get('/create', (req, res, next) => {
    // connection.query('SELECT * FROM `users`', function (error, results, fields) {
    //     res.send(results)
    // });
});

module.exports = router;