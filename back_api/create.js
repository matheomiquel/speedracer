const express = require('express');
const app = express();
const server = require("./server.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

exports.createGroups = function(req, res)
{
    if (typeof req.body.name !== 'undefined' && typeof req.body.event_id !== 'undefined') {
        const groups = {
            name: req.body.name,
            event_id: req.body.event_id,
        };    
        server.mysql_co.query("INSERT INTO groups SET ?", [groups], (errB, rowB, fieldB) => {
        if (errB) throw errB;
        res.json({error: false});
        });
    } else 
        return res.json({error: false, message: "Tous les champs ne sont pas remplis"});
}

exports.createEvent = function(req, res)
{
    if (typeof req.body.name !== 'undefined' && typeof req.body.type !== 'undefined' && typeof req.body.date !== 'undefined' && typeof req.body.description !== 'undefined' && typeof req.body.place !== 'undefined') {
        const groups = {
            name: req.body.name,
            type: req.body.type,
            date : req.body.date,
            description: req.body.description,
            place : req.body.place,
        };    
        server.mysql_co.query("INSERT INTO event SET ?", [groups], (errB, rowB, fieldB) => {
        if (errB) throw errB;
        res.json({error: false});
        });
    } else 
        return res.json({error: false, message: "Tous les champs ne sont pas remplis"});
}

exports.createRank = function(req, res)
{
    server.mysql_co.query("select * from event where id = ?",[req.body.event_id], (errA, rowA) => {
        if(errA) throw errA;
        if(!rowA.length){
            res.json("event non trouve !!!");
        }
        else {
            server.mysql_co.query("select * from groups where id = ?",[req.body.groupes_id], (errB, rowB) => {
                if(errB) throw errB;
                else if(!rowB.length)
                    res.json("groupe non trouve !!!");
                else {
                    if(typeof req.body.rank !== 'undefined' && typeof req.body.groupes_id !== 'undefined' && typeof req.body.event_id !== 'undefined') {
                    const rank = {
                        rank : req.body.rank,
                        groupes_id : req.body.groupes_id,
                        event_id : req.body.event_id,
                    };
                    server.mysql_co.query("INSERT INTO ranking SET ?", [rank], (errB, rowB, fieldB) => {
                        if (errB) throw errB;
                        res.json({error: false});
                    });
                } else 
                    res.json({error: true, message: "Tous les champs ne sont pas remplis"});
                }
            });
        }
    });
}