const mysql = require('mysql');
const bcrypt = require('bcrypt');

const mysql_co = mysql.createConnection({
    host: "localhost",
    user: "root",
});

mysql_co.connect(function(err) {
    if (err) throw err;
    mysql_co.query("DROP DATABASE IF EXISTS speedracer");
    mysql_co.query("CREATE DATABASE speedracer", function (err, result) {
        if (err) throw err;
        console.log("Base de données \"speedracer\" créée.");
        mysql_co.query("USE speedracer");
        bcrypt.genSalt(10, function(errB, salt) {
            if (errB) throw errB;
            bcrypt.hash("bijour" ,salt , function(errC, hash) {
                if (errC) throw errC;
                mysql_co.query("CREATE TABLE users(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, firstname VARCHAR(50), lastname VARCHAR(50), email VARCHAR(100) UNIQUE, pseudo VARCHAR(50) UNIQUE, password VARCHAR(240),access_token VARCHAR(1300), age DATETIME) ENGINE=INNODB;");
                mysql_co.query("CREATE TABLE event(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(100),date DATETIME, type VARCHAR(30),description  VARCHAR(5000), place VARCHAR(150), end tinyint(1) DEFAULT 0)  ENGINE=INNODB");
                mysql_co.query("CREATE TABLE groups(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(50), event_id INT, FOREIGN KEY (event_id) REFERENCES event(id) ON DELETE CASCADE) ENGINE=INNODB");
                mysql_co.query("CREATE TABLE ranking(rank INT,groupes_id INT,FOREIGN KEY (groupes_id) REFERENCES groups(id) ON DELETE CASCADE,event_id INT,FOREIGN KEY (event_id) REFERENCES event(id) ON DELETE CASCADE) ENGINE=INNODB");      
                mysql_co.query("CREATE TABLE user_has_groups(users_id INT, FOREIGN KEY (users_id) REFERENCES users(id) ON DELETE CASCADE,groups_id INT,FOREIGN KEY (groups_id) REFERENCES groups(id) ON DELETE CASCADE)ENGINE=INNODB;", (err, rows, field) => {
                if (err) throw err;
                console.log('Tables "users", "event" et "ranking" créées.');
                //////////////////////////////SEED EVENT////////////////////////////
                mysql_co.query('INSERT INTO event (name, date, type,description,place) VALUES ("test", now(), "test de merde" , "ben c\'est de la merde quoi :) ", "the place to be")');
                mysql_co.query('INSERT INTO event (name, date, type,description,place, end) VALUES ("test de dieu", now(), "test de dieu" , "ben c\'est génial quoi :) ", "the place to be", 1)');
                mysql_co.query('INSERT INTO groups (name, event_id) VALUES ("groupe de dieu", 1)');
                mysql_co.query('INSERT INTO groups (name, event_id) VALUES ("groupe de dieu bis", 1)');
                mysql_co.query('INSERT INTO groups (name, event_id) VALUES ("groupe de merde", 2)');
                //mysql_co.query('INSERT INTO ranking (rank, users_id, event_id) VALUES (1, 1 , 1)');
                //////////////////////////////SEED USER////////////////////////////
                mysql_co.query('INSERT INTO users (lastname, firstname, email, password, pseudo) VALUES ("miquel", "mathéo","matheo@gmail.com", ? , "dieu")',[hash] );
                mysql_co.query('INSERT INTO users (lastname, firstname, email, password, pseudo) VALUES ("emery", "armand","armand@gmail.com", ? , "roux")',[hash] );
                mysql_co.query('INSERT INTO users (lastname, firstname, email, password, pseudo) VALUES ("kernin", "brandon","brandon@gmail.com", ? , "con")',[hash] );
                mysql_co.query('INSERT INTO users (lastname, firstname, email, password, pseudo) VALUES ("rafik", "sifaoui","rafik@gmail.com", ? , "arabes")',[hash] );
                mysql_co.query('INSERT INTO users (lastname, firstname, email, password, pseudo) VALUES ("soen", "lucile","lucile@gmail.com", ? , "bro")',[hash] );
                //////////////////////////////SEED USER_HAS_GROUPS////////////////////////////
                mysql_co.query('INSERT INTO user_has_groups (users_id, groups_id) VALUES (1, 1)');
                mysql_co.query('INSERT INTO user_has_groups (users_id, groups_id) VALUES (2, 1)');
                mysql_co.query('INSERT INTO user_has_groups (users_id, groups_id) VALUES (5, 2)');
                mysql_co.query('INSERT INTO user_has_groups (users_id, groups_id) VALUES (3, 3)');
                mysql_co.query('INSERT INTO user_has_groups (users_id, groups_id) VALUES (4, 3)');
                mysql_co.end();
                });
            });
        });
    });
});