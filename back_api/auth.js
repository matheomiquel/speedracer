const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const server = require("./server.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));


exports.register = function(req, res)
{
    if (typeof req.body.email !== 'undefined' && typeof req.body.password !== 'undefined' && typeof req.body.firstname !== 'undefined' && typeof req.body.lastname !== 'undefined') {
        server.mysql_co.query("SELECT * FROM users WHERE email = ?", [req.body.email], (errA, rowsA, fieldsA) => {
            if (errA) throw errA;

            if (rowsA[0] != null)
                return res.json({error: true, message: "Email déjà prise"});
            
            bcrypt.genSalt(10, function(errB, salt) {
                if (errB) throw errB;
                bcrypt.hash(req.body.password, salt, function(errC, hash) {
                    if (errC) throw errC;
                    const user = {
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        password: hash,
                    };
                    server.mysql_co.query("INSERT INTO users SET ?", [user], (errD, rowsD, fieldsD) => {
                        if (errD) throw errD;
                        res.json({error: false});
                    });
                });
            });
        });
    } else
        return res.json({error: true, message: "tous les champs ne sont pas renseignés"});
}

exports.login = function(req, res)
{
    if (typeof req.body.password !== 'undefined' && typeof req.body.email !== 'undefined') {
        server.mysql_co.query("SELECT * FROM users WHERE email = ?", [req.body.email], (errA, rowsA, fieldsA) => {
            if (errA) throw errA;
            let user = rowsA[0];

            if (rowsA.length == 0)
                return res.json({error: true, message: "Email inexistante"});

            bcrypt.compare(req.body.password, user.password, function(errB, resB) {
                if (errB) throw erB;
                if (resB) {
                    jwt.sign({id: user.id}, 'privatekey', (errC, token) => {
                        if (errC) throw errC;
                        user.access_token = token;

                        server.mysql_co.query("UPDATE users SET access_token = ? WHERE id = ?;", [token, user.id], (errD, rowsD, fieldD) => {
                            if (errD) throw errD;
                            res.json({token: token, error: false});
                        })
                    });
                } else if (!resB)
                    return res.json({error: true, message: "Mot de passe incorrect"});
            });
        });
    }
}