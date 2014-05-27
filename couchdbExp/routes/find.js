

module.exports = function(app, db) {
    var now = require("performance-now");

    app.get("/find1", function(req, res) {
        var endTime = 0;
        var startTime = now();
        db.get("one", function(err, body) {
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

    app.get("/find", function(req, res) {
        var endTime = 0;
        var startTime = now();
        db.list(function(err, body) {
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
};
