

module.exports = function(app, db) {
    var now = require("performance-now");
    
    app.get("/find1", function(req, res) {
        db.open(function(err, db) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Error check log");
            } else {
                var collection = db.collection("test");
                var endTime = 0;
                var startTime = now();
                collection.findOne({firstname:"Clark"}, function(err, doc) {
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

    app.get("/find", function(req, res) {
        db.open(function(err, db) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Error check log");
            } else {
                var collection = db.collection("test");
                var endTime = 0;
                var startTime = now();
                collection.find({}, function() {
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
};
