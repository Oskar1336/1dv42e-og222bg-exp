

module.exports = function(app, couchbase) {
    var now = require("performance-now");
    var data = {
        firstname: "Sven",
        lastname: "Tumba",
        birthdate: "1931-08-27",
        occupations: ["Hockey", "Fotboll", "Golf", "Vattenskidor", "TV-pucken"],
        employment: {
            companyName: "STAB",
            ceo: "Sven Tumba",
            location: {
                cityName: "Stockholm",
                lng: 18.0686,
                lat: 59.3294
            }
        }
    };

    app.get("/update1", function(req, res) {
        var db = new couchbase.Connection({
            bucket: "default",
            host: "127.0.0.1"
        }, function(err) {
            var endTime = 0;
            var startTime = now();
            db.replace("one", data, function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    endTime = now();
                    console.log("Start time: " + startTime);
                    console.log("End time: " + endTime);
                    res.render("testresult", {startTime: startTime, endTime: endTime, totalTime: endTime - startTime});
                }
            });
        });
    });

    app.get("/update5000", function(req, res) {
        var db = new couchbase.Connection({
            bucket: "default",
            host: "127.0.0.1"
        }, function(err) {
            var endTime = 0;
            var startTime = now();
            for (var i = 0; i < 5000; i++) {
                db.replace(i, data, function(err, result) {
                    if (err) {
                        console.log(err);
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
    });

    app.get("/update50000", function(req, res) {
        var db = new couchbase.Connection({
            bucket: "default",
            host: "127.0.0.1"
        }, function(err) {
            var endTime = 0;
            var startTime = now();
            for (var i = 0; i < 50000; i++) {
                db.replace(i, data, function(err, result) {
                    if (err) {
                        console.log(err);
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
    });

    app.get("/update100000", function(req, res) {
        var db = new couchbase.Connection({
            bucket: "default",
            host: "127.0.0.1"
        }, function(err) {
            var endTime = 0;
            var startTime = now();
            for (var i = 0; i < 100000; i++) {
                db.replace(i, data, function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        endTime = now();
                    }
                });
            }

            setTimeout(function() {
                console.log("Start time: " + startTime);
                console.log("End time: " + endTime);
                res.render("testresult", {startTime: startTime, endTime: endTime, totalTime: endTime - startTime});
            }, 7000);
        });
    });
};
