const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const server = require("./server.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

exports.getUsers = function(req, res)
{
    server.mysql_co.query("SELECT firstname, lastname, pseudo, email FROM users", (errA, rowA, fieldA) => {
        if (errA) throw errA;
        let users = [];
        rowA.forEach(user => {
            users.push(user);
        });
        res.json({error: false, users});
    });
}

exports.getUserById = function(req, res)
{
    server.mysql_co.query("SELECT firstname, lastname, pseudo FROM users where id = ?",[req.body.id], (errA, rowA, fieldA) => {
        if (errA) throw errA;
        rowA.length == 0 ? res.json({error: true, message: "ID non trouvé"}) : res.json({error: false, rowA});
    });
}

exports.getUserByPseudo = function(req, res)
{
    server.mysql_co.query("SELECT firstname, lastname, pseudo FROM users where pseudo = ?",[req.body.pseudo], (errA, rowA, fieldA) => {
        if (errA) throw errA;
        rowA.length == 0 ? res.json({error: true, message: "Pseudo non trouvé"}) : res.json({error: false, rowA});
    });
}

exports.getCurrentUser = function(req, res)
{
    server.mysql_co.query("SELECT firstname, lastname, pseudo, email FROM users where access_token = ?", [server.getAuthorization(req)], (errA, rowA, fieldA) => {
        if (errA) throw errA;
        res.json({error: false, rowA});
    });
}

exports.getUserByGroups = function(req, res)
{
    server.mysql_co.query("SELECT firstname, lastname, pseudo FROM users INNER JOIN user_has_groups ON users.id = user_has_groups.users_id WHERE groups_id = ?", [req.body.groups_id] , (errA, rowA, fieldA) => {
        if (errA) throw errA;
        if(rowA.length == 0)
            res.json({error: true, message: "Groupes non trouvé"})
        else {
            let users = []
            rowA.forEach(user => {
                users.push(user);
            });
            res.json({error: false, users});
        }
    });
}

exports.getUserByEvent = function(req, res)
{
    
    server.mysql_co.query("SELECT firstname, lastname, pseudo FROM users INNER JOIN user_has_groups ON users.id = user_has_groups.users_id WHERE groups_id in (SELECT id  FROM groups  WHERE event_id = ?)",[req.body.event_id] , (errA, rowA, fieldA) => {
        if (errA) throw errA;
        if(rowA.length == 0)
            res.json({error: true, message: "Event non trouvé"})
        var events = [];
        rowA.forEach(event => {
            events.push(event);
        console.log(event);
        });
        res.json(events);
    });
}

exports.getGroupsByEvent = function(req, res)
{
    server.mysql_co.query("SELECT name FROM groups WHERE event_id = ?",[req.body.event_id] , (errA, rowA, fieldA) => {
        if (errA) throw errA;
        if(rowA.length == 0)
            res.json({error: true, message: "Event non trouvé"})
        let events = [];
        rowA.forEach(event => {
            events.push(event);
        });
        res.json(events);
    });
}

exports.getEvent = function(req, res)
{
    server.mysql_co.query("SELECT * FROM event", (errA, rowA, fieldA) => {
        if (errA) throw errA;
        let events = [];
        rowA.forEach(event => {
            events.push(event);
        });
        res.json({error: false, events});
    });
}

exports.getFinishedEvent = function(req, res)
{
    server.mysql_co.query("SELECT * FROM event where end = 1", (errA, rowA, fieldA) => {
        if (errA) throw errA;
        let events = [];
        rowA.forEach(event => {
            events.push(event);
        });
        res.json({error: false, events});
    });
}

exports.getUnfinishedEvent = function(req, res)
{
    server.mysql_co.query("SELECT * FROM event where end = 0", (errA, rowA, fieldA) => {
        if (errA) throw errA;
        let events = [];
        rowA.forEach(event => {
            events.push(event);
        });
        res.json({error: false, events});
    });
}

exports.getEventById = function(req, res)
{
    server.mysql_co.query("SELECT * FROM event where id = ?",[req.body.id] ,(errA, rowA, fieldA) => {
        if (errA) throw errA;
        rowA.length == 0 ? res.json({error: true, message: "Event non trouvé"}) : res.json({error: false, rowA});
    });
}

exports.getEventByName = function(req, res)
{
    server.mysql_co.query("SELECT * FROM event where name = ?",[req.body.name] ,(errA, rowA, fieldA) => {
        if (errA) throw errA;
        rowA.length == 0 ? res.json({error: true, message: "Event non trouvé"}) : res.json({error: false, rowA});
    });    
}

exports.getGroups = function(req, res)
{
    server.mysql_co.query("SELECT * FROM groups", (errA, rowA, fieldA) => {
        if (errA) throw errA;
        let events = [];
        rowA.forEach(event => {
            events.push(event);
        });
        res.json({error: false, events});
    });
}

exports.getGroupsByName = function(req, res)
{
    server.mysql_co.query("SELECT * FROM groups where name = ?", [req.body.name], (errA, rowA, fieldA) => {
        if (errA) throw errA;
        rowA.length == 0 ? res.json({error: true, message: "Groupes non trouvé"}) : res.json({error: false, rowA});
    });
}

exports.getGroupsById = function(req, res)
{
    server.mysql_co.query("SELECT * FROM groups where id = ?", [req.body.id], (errA, rowA, fieldA) => {
        if (errA) throw errA;
        rowA.length == 0 ? res.json({error: true, message: "Groupes non trouvé"}) : res.json({error: false, rowA});
    });
}
