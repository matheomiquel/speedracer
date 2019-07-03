const express = require('express');
const app = express();
const server = require("./server.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

exports.UpdateUsers = function(req, res)
{
    if(typeof req.body.firstname !== 'undefined')
    server.mysql_co.query("UPDATE users SET firstname = ? where access_token = ?", [req.body.firstname, access_token], (errA, rowA, fieldA) => {
       if (errA) throw errA;   
    });
    if(typeof req.body.lastname !== 'undefined')
    server.mysql_co.query("UPDATE users SET lastname = ? where access_token = ?", [req.body.lastname, access_token], (errA, rowA, fieldA) => {
       if (errA) throw errA;   
    });
    if(typeof req.body.pseudo !== 'undefined')
    server.mysql_co.query("UPDATE users SET pseudo = ? where access_token = ?", [req.body.pseudo, access_token], (errA, rowA, fieldA) => {
       if (errA) throw errA;   
    });
    if(typeof req.body.age !== 'undefined')
    server.mysql_co.query("UPDATE users SET age = ? where access_token = ?", [req.body.age, access_token], (errA, rowA, fieldA) => {
       if (errA) throw errA;   
    });
    res.json({error: false});
}

exports.UpdateGroups = function(req, res)
{
   if(typeof req.body.groups_id !== 'undefined'){
      console.log(req.body.groups_id);
      if(typeof req.body.name !== 'undefined')
      server.mysql_co.query("UPDATE groups SET name = ? where id = ", [req.body.name, req.body.groups_id], (errA, rowA, fieldA) => {
         if (errA) throw errA;   
      });
      res.json({error: false});
   } else
      res.json({error: true, message : "wesh ta pas mis l'id du groupe :D"});
}

exports.UpdateEvent = function(req, res)
{
   if( typeof req.body.event_id !== 'undefined'){
      if(typeof req.body.name !== 'undefined')
         server.mysql_co.query("UPDATE events SET name = ? where id = ?", [req.body.name, req.body.id], (errA, rowA, fieldA) => {
         if (errA) throw errA;   
      });
      if(typeof req.body.date !== 'undefined')
      server.mysql_co.query("UPDATE events SET date = ?", [req.body.date], (errA, rowA, fieldA) => {
         if (errA) throw errA;   
      });
      if( typeof req.body.type !== 'undefined')
      server.mysql_co.query("UPDATE events SET type = ?", [req.body.type], (errA, rowA, fieldA) => {
         if (errA) throw errA;   
      });
      if(typeof req.body.description !== 'undefined')
      server.mysql_co.query("UPDATE events SET description = ?", [req.body.description], (errA, rowA, fieldA) => {
         if (errA) throw errA;   
      });
      if(typeof req.body.place !== 'undefined')
      server.mysql_co.query("UPDATE events SET place = ?", [req.body.place], (errA, rowA, fieldA) => {
         if (errA) throw errA;   
      });
      if(typeof req.body.end !== 'undefined')
      server.mysql_co.query("UPDATE events SET end = ?", [req.body.end], (errA, rowA, fieldA) => {
         if (errA) throw errA;   
      });
      res.json({error: false});
   } else 
      res.json({error: true, message : "wesh ta pas mis l'id de l'event :D"});
}