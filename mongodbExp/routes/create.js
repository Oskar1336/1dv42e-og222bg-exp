

module.exports = function(app, db) {
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

    app.get("/create1", function(req, res) {
        db.open(function(err, db) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Error check log");
            } else {
                var collection = db.collection("test");
                var endTime = 0;
                var startTime = now();
                collection.insert(data, function(err, result) {
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
                    db.close();
                });
            }
        });
    });

    app.get("/create5000", function(req, res) {
        db.open(function(err, db) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Error check log");
            } else {
                var collection = db.collection("test");
                var endTime = 0;
                var startTime = now();
                for (var i = 0; i < 5000; i++) {
                    collection.insert(data, function(err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            endTime = now();
                        }
                    });
                }

                setTimeout(function() {
                    db.close();
                    console.log("Start time: " + startTime);
                    console.log("End time: " + endTime);
                    res.render("testresult", {startTime: startTime, endTime: endTime, totalTime: endTime - startTime});
                }, 5000);
            }
        });
    });

    app.get("/create50000", function(req, res) {
        db.open(function(err, db) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Error check log");
            } else {
                var collection = db.collection("test");
                var endTime = 0;
                var startTime = now();
                for (var i = 0; i < 50000; i++) {
                    collection.insert(data, function(err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            endTime = now();
                        }
                    });
                }

                setTimeout(function() {
                    db.close();
                    console.log("Start time: " + startTime);
                    console.log("End time: " + endTime);
                    res.render("testresult", {startTime: startTime, endTime: endTime, totalTime: endTime - startTime});
                }, 5000);
            }
        });
    });

    app.get("/create100000", function(req, res) {
        db.open(function(err, db) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Error check log");
            } else {
                var collection = db.collection("test");
                var endTime = 0;
                var startTime = now();
                for (var i = 0; i < 100000; i++) {
                    collection.insert(data, function(err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            endTime = now();
                        }
                    });
                }

                setTimeout(function() {
                    db.close();
                    console.log("Start time: " + startTime);
                    console.log("End time: " + endTime);
                    res.render("testresult", {startTime: startTime, endTime: endTime, totalTime: endTime - startTime});
                }, 10000);
            }
        });
    });

    app.get("/create200000", function(req, res) {
        db.open(function(err, db) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Error check log");
            } else {
                var collection = db.collection("test");
                var endTime = 0;
                var startTime = now();
                for (var i = 0; i < 200000; i++) {
                    collection.insert(data, function(err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            endTime = now();
                        }
                    });
                }

                setTimeout(function() {
                    db.close();
                    console.log("Start time: " + startTime);
                    console.log("End time: " + endTime);
                    res.render("testresult", {startTime: startTime, endTime: endTime, totalTime: endTime - startTime});
                }, 10000);
            }
        });
    });
};
