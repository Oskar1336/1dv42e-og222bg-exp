

module.exports = function(app, db) {
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
        db.open(function(err, db) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Error check log");
            } else {
                var collection = db.collection("test");
                collection.find({}, {limit: 1}).toArray(function(err, docs) {
                    if (err) {
                        console.log(err);
                        res.status(500);
                        res.send("Error check log");
                    } else {
                        var endTime = 0;
                        var startTime = now();
                        collection.update({_id: docs[0]._id}, data, function(err, result) {
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
            }
        });
    });

    app.get("/update", function(req, res) {
        db.open(function(err, db) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Error check log");
            } else {
                var collection = db.collection("test");
                var endTime = 0;
                var startTime = now();
                collection.update({}, data, function(err, result) {
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
