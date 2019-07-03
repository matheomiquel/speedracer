const express = require('express');
const app = express();
const server = require("./server.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

exports.DeleteUserById = function(req, res)
{
    if (typeof req.body.id !== 'undefined') {
        server.mysql_co.query("DELETE FROM users where id = ?", [req.body.id], function(errA, rowA, fieldA) {
            if (errA) throw errA;
            res.json({error: false});
        });
    } else 
        res.json({error: true, message: "L'utilisateur n'a pas été trouvé"})
}

exports.DeleteUserByPseudo = function(req, res)
{
    if (typeof req.body.pseudo !== 'undefined') {
        server.mysql_co.query("DELETE FROM users where pseudo = ?", [req.body.pseudo], function(errA, rowA, fieldA) {
            if (errA) throw errA;
            res.json({error: false});
        });
    } else 
        res.json({error: true, message: "L'utilisateur n'a pas été trouvé"})
}

exports.DeleteEvent = function(req, res)
{
    if (typeof req.body.id !== 'undefined') {
        server.mysql_co.query("DELETE FROM event where id = ?", [req.body.id], function(errA, rowA, fieldA) {
            if (errA) throw errA;
            res.json({error: false});
        });
    } else 
        res.json({error: true, message: "L'event n'a pas été trouvé"})
}

exports.DeleteGroups = function(req, res)
{
    if (typeof req.body.id !== 'undefined') {
        server.mysql_co.query("DELETE FROM groups where id = ?", [req.body.id], function(errA, rowA, fieldA) {
            if (errA) throw errA;
            return res.json({error: false});
        });
    } else 
        return res.json({error: true, message: "le groups n'a pas été trouvé"})
}