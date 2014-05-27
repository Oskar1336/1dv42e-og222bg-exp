

module.exports = function(app, couchbase) {
    var now = require("performance-now");

    app.get("/find1", function(req, res) {
        var db = new couchbase.Connection({
            bucket: "default",
            host: "127.0.0.1"
        }, function(err) {
            var endTime = 0;
            var startTime = now();
            db.get("one", function(err, result) {
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
    });

    app.get("/find5000", function(req, res) {
        var db = new couchbase.Connection({
            bucket: "default",
            host: "127.0.0.1"
        }, function(err) {
            var endTime = 0;
            var startTime = now();
            for (var i = 0; i < 5000; i++) {
                db.get(i, function(err, result) {
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

    app.get("/find50000", function(req, res) {
        var db = new couchbase.Connection({
            bucket: "default",
            host: "127.0.0.1"
        }, function(err) {
            var endTime = 0;
            var startTime = now();
            for (var i = 0; i < 50000; i++) {
                db.get(i, function(err, result) {
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

    app.get("/find100000", function(req, res) {
        var db = new couchbase.Connection({
            bucket: "default",
            host: "127.0.0.1"
        }, function(err) {
            var endTime = 0;
            var startTime = now();
            for (var i = 0; i < 100000; i++) {
                db.get(i, function(err, result) {
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
};
