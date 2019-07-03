const express = require('express');
const app = express();
const mysql = require('mysql');
var cors = require('cors')

const ac = require("./auth.js");
const rc = require("./read.js");
const cc = require("./create.js");
const uc = require("./update.js");
const dc = require("./delete.js");
const server = require("./server.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

exports.mysql_co = mysql.createConnection({
	host: 'localhost',
    user: 'root',
	database: 'speedracer'
});

app.listen(3000, () => {
	console.log("Serveur allumé sur le port 3000");
});

// AUTH // 

app.post("/register", (req, res) => {
    ac.register(req, res);
});

app.post("/login", (req, res) => {
	ac.login(req, res);
});


// READ // 


app.get("/getUsers",  (req, res) => {
	rc.getUsers(req, res);
});

app.get("/getUserById", verifyToken, (req, res) => {
	rc.getUserById(req, res);
});

app.get("/getUserByPseudo", verifyToken, (req, res) => {
	rc.getUserByPseudo(req, res);
});

app.get("/getCurrentUser", verifyToken, (req, res) => {
	rc.getCurrentUser(req, res);
});

app.get("/getUserByGroups", verifyToken, (req, res) => {
	rc.getUserByGroups(req, res);
});

app.get("/getGroupsByEvent", verifyToken, (req, res) => {
	rc.getGroupsByEvent(req, res);
});

app.get("/getEvent", verifyToken, (req, res) => {
	rc.getEvent(req, res);
});

app.get("/getEventById", verifyToken, (req, res) => {
	rc.getEventById(req, res);
});

app.get("/getEventByName", verifyToken, (req, res) => {
	rc.getEventByName(req, res);
});

app.get("/getFinishedEvent", verifyToken, (req, res) => {
	rc.getFinishedEvent(req, res);
});

app.get("/getUnfinishedEvent", verifyToken, (req, res) => {
	rc.getUnfinishedEvent(req, res);
});

app.get("/getGroups", verifyToken, (req, res) => {
	rc.getGroups(req, res);
});

app.get("/getGroupsByName", verifyToken, (req, res) => {
	rc.getGroupsByName(req, res);
});

app.get("/getGroupsById", verifyToken, (req, res) => {
	rc.getGroupsById(req, res);
});

app.get("/getUserByEvent", verifyToken, (req, res) => {
	rc.getUserByEvent(req, res);
});

// CREATE //

app.post("/createGroups", verifyToken, (req, res) => {
	cc.createGroups(req, res);
});

app.post("/createEvent", verifyToken, (req, res) => {
	cc.createEvent(req, res);
});

app.post("/createRank", verifyToken, (req, res) => {
	cc.createRank(req, res);
});

// UPDATE //

app.put("/UpdateUsers", verifyToken, (req, res) => {
	uc.UpdateUsers(req, res);
});

app.put("/UpdateGroups", verifyToken, (req, res) => {
	uc.UpdateGroups(req, res);
});

app.put("/UpdateEvent", verifyToken, (req, res) => {
	uc.UpdateEvent(req, res);
});

// DELETE //

app.delete("/DeleteUserById" , verifyToken, (req, res) => {
	dc.DeleteUserById(req, res);
});

app.delete("/DeleteUserByPseudo" , verifyToken, (req, res) => {
	dc.DeleteUserByPseudo(req, res);
});

app.delete("/DeleteEvent" , verifyToken, (req, res) => {
	dc.DeleteEvent(req, res);
});

app.delete("/DeleteGroups" , verifyToken, (req, res) => {
	dc.DeleteGroups(req, res);
});

exports.getAuthorization = function(req)
{
	if(typeof req.headers['authorization'] !== 'undefined')
		return req.headers['authorization'].split(' ')[1];
	else
		return 0;
}

function verifyToken(req, res, next) 
{
	let authorization = server.getAuthorization(req);
	if (authorization == 0)
		res.json({error: true, message: "pas d'access_token"});
	else {
		server.mysql_co.query("SELECT * FROM users WHERE access_token = ?", [authorization], (err, rows) => {
			if (err) throw err;
			if (rows[0] == null)
				res.json({error: true, message: "access_token non renseigné"});
			else if (rows[0].access_token === authorization)
				next();
			else 
				res.json({error: true, message: "access_token incorrect"});
		});
	}
}