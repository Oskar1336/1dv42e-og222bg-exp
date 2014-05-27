

module.exports = function(app, db) {
    var now = require("performance-now");

    app.get("/remove1", function(req, res) {
        db.get("one", function(err, body) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Error check log");
            } else {
                var endTime = 0;
                var startTime = now();
                db.destroy(body._id, body._rev, function(err, body) {
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
            }
        });
    });

    app.get("/remove", function(req, res) {
        db.list(function(err, body) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Error check log");
            } else {
                var endTime = 0;
                var startTime = now();
                for (var i = 0; i < body.total_rows; i++) {
                    db.destroy(body.rows[i].id, body.rows[i].value, function(err, body) {
                        endTime = now();
                    });
                }

                setTimeout(function() {
                    console.log("Start time: " + startTime);
                    console.log("End time: " + endTime);
                    res.render("testresult", {startTime: startTime, endTime: endTime, totalTime: endTime - startTime});
                }, 10000);
            }
        });
    });
};
