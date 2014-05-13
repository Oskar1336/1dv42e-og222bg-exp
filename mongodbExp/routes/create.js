

module.exports = function(app, db) {
    app.get("create5000", function(req, res) {
        db.open(function(err, db) {
            var collection = db.collection("test");
            var startTime = Date.now();
            var endTime = Date.now();
            for (var i = 0; i < 5000; i++) {
                collection.insert({
                    firstname: "Clark",
                    lastname: "Kent",
                    birthdate: "1970-01-01",
                    occupation: "Superman",
                    enemy: "Lex Luthor"
                }, function(err, result) {
                    endTime = Date.now();
                });
            }

            setTimeout(function() {
                console.log("Start time: " + startTime);
                console.log("End time: " + endTime);
            }, 10000);
        });
    });

    app.get("create50000", function(req, res) {
        db.open(function(err, db) {
            var collection = db.collection("test");
            var startTime = Date.now();
            var endTime = Date.now();
            for (var i = 0; i < 50000; i++) {
                collection.insert({
                    firstname: "Clark",
                    lastname: "Kent",
                    birthdate: "1970-01-01",
                    occupation: "Superman",
                    enemy: "Lex Luthor"
                }, function(err, result) {
                    endTime = Date.now();
                });
            }

            setTimeout(function() {
                console.log("Start time: " + startTime);
                console.log("End time: " + endTime);
            }, 20000);
        });
    });

    app.get("create100000", function(req, res) {
        db.open(function(err, db) {
            var collection = db.collection("test");
            var startTime = Date.now();
            var endTime = Date.now();
            for (var i = 0; i < 100000; i++) {
                collection.insert({
                    firstname: "Clark",
                    lastname: "Kent",
                    birthdate: "1970-01-01",
                    occupation: "Superman",
                    enemy: "Lex Luthor"
                }, function(err, result) {
                    endTime = Date.now();
                });
            }

            setTimeout(function() {
                console.log("Start time: " + startTime);
                console.log("End time: " + endTime);
            }, 30000);
        });
    });

    app.get("create200000", function(req, res) {
        db.open(function(err, db) {
            var collection = db.collection("test");
            var startTime = Date.now();
            var endTime = Date.now();
            for (var i = 0; i < 200000; i++) {
                collection.insert({
                    firstname: "Clark",
                    lastname: "Kent",
                    birthdate: "1970-01-01",
                    occupation: "Superman",
                    enemy: "Lex Luthor"
                }, function(err, result) {
                    endTime = Date.now();
                });
            }

            setTimeout(function() {
                console.log("Start time: " + startTime);
                console.log("End time: " + endTime);
            }, 40000);
        });
    });

};
