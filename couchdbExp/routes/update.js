

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
        var endTime = 0;
        var startTime = now();
        db.update(data, "one", function(err, result) {
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

    app.get("/update", function(req, res) {
        db.list(function(err, body) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Error check log");
            } else {
                var endTime = 0;
                var startTime = now();
                for (var i = 0; i < body.total_rows; i++) {
                    db.update(data, body.rows[i].id, function(err, result) {
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

    db.update = function(obj, key, callback) {
        var db = this;

        db.get(key, function(error, existing) {
            if (!error) {
                obj._rev = existing._rev;
                db.insert(obj, key, callback);
            }
        });
    };
};
