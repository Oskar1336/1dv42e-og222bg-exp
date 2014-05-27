

module.exports = function(app, db, nano) {
    var now = require("performance-now");
    var data = {
        firstname: "Clark",
        lastname: "Nilsson",
        birthdate: "1970-01-01",
        occupations: ["Journalist", "Fotograf", "Webdesigner"],
        employment: {
            companyName: "CNAB",
            ceo: "Kenta Nilsson",
            location: {
                cityName: "Göteborg",
                lng: 11.9667,
                lat: 57.7000
            }
        }
    };

    app.get("/createDatabase", function(req, res) {
        nano.db.destroy("test", function(err) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Error check log");
            } else {
                nano.db.create("test", function(err, body) {
                    if (err) {
                        console.log(err);
                        res.status(500);
                        res.send("Error check log");
                    } else {
                        console.log(body);
                        res.status(200);
                        res.send("Database created");
                    }
                });
            }
        });
    });
    
    app.get("/create1", function(req, res) {
        var endTime = 0;
        var startTime = now();
        db.insert(data, "one", function(err, body) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Error check log");
            } else {
                endTime = now();
                console.log("Start time: " + startTime);
                console.log("End time: " + endTime);
                res.render("testresult", {startTime: startTime, endTime: endTime, totalTime: endTime - startTime});
            }
        });
    });

    app.get("/create5000", function(req, res) {
        var endTime = 0;
        var startTime = now();
        for (var i = 0; i < 5000; i++) {
            db.insert(data, function(err, body) {
                if (err) {
                    console.log(err);
                    res.status(500);
                    res.send("Error check log");
                } else {
                    endTime = now();
                }
            });
        }

        setTimeout(function() {
            console.log("Start time: " + startTime);
            console.log("End time: " + endTime);
            res.render("testresult", {startTime: startTime, endTime: endTime, totalTime: endTime - startTime});
        }, 5000);
    });

    app.get("/create50000", function(req, res) {
        var endTime = 0;
        var startTime = now();
        for (var i = 0; i < 50000; i++) {
            db.insert(data, function(err, body) {
                if (err) {
                    console.log(err);
                    res.status(500);
                    res.send("Error check log");
                } else {
                    endTime = now();
                }
            });
        }

        setTimeout(function() {
            console.log("Start time: " + startTime);
            console.log("End time: " + endTime);
            res.render("testresult", {startTime: startTime, endTime: endTime, totalTime: endTime - startTime});
        }, 5000);
    });

    app.get("/create100000", function(req, res) {
        var endTime = 0;
        var startTime = now();
        for (var i = 0; i < 100000; i++) {
            db.insert(data, function(err, body) {
                if (err) {
                    console.log(err);
                    res.status(500);
                    res.send("Error check log");
                } else {
                    endTime = now();
                }
            });
        }

        setTimeout(function() {
            console.log("Start time: " + startTime);
            console.log("End time: " + endTime);
            res.render("testresult", {startTime: startTime, endTime: endTime, totalTime: endTime - startTime});
        }, 10000);
    });

    app.get("/create200000", function(req, res) {
        var endTime = 0;
        var startTime = now();
        for (var i = 0; i < 200000; i++) {
            db.insert(data, function(err, body) {
                if (err) {
                    console.log(err);
                    res.status(500);
                    res.send("Error check log");
                } else {
                    endTime = now();
                }
            });
        }

        setTimeout(function() {
            console.log("Start time: " + startTime);
            console.log("End time: " + endTime);
            res.render("testresult", {startTime: startTime, endTime: endTime, totalTime: endTime - startTime});
        }, 10000);
    });
};
