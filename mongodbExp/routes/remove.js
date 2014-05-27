

module.exports = function(app, db) {
    var now = require("performance-now");

    app.get("/remove1", function(req, res) {
        db.open(function(err, db) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Error check log");
            } else {
                var collection = db.collection("test");
                collection.findOne({firstname: "Clark"}, function(err, doc) {
                    var endTime = 0;
                    var startTime = now();
                    collection.remove(function(err, result) {
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
                });
            }
        });
    });

    app.get("/remove", function(req, res) {
        db.open(function(err, db) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Error check log");
            } else {
                var collection = db.collection("test");
                var endTime = 0;
                var startTime = now();
                collection.remove(function(err, result) {
                    if (err) {
                        console.log(err);
                        res.status(500);
                        res.send("Error check log");
                    } else {
                        endTime = now();
                    }
                });
                
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
