const Paper = require("../models/PapersModel");

exports.getAllPapers = async (req, res, next) => {
  try {
    stream = req.url.slice(2).split("=")[1].split("&")[0];
    semester = req.url.slice(2).split("=")[2];

    stream_id = stream == "EEE" ? 0 : 1;

    const papers = await Paper.find({});
    try {
      const requiredPapers = papers[stream_id][stream][`Semester${semester}`];

      if (!requiredPapers) {
        res.status(200).render("results", {
          title: "No Papers Found",
          requiredPapers,
        });
      } else {
        res.status(200).render("results", {
          title: "Papers Found",
          requiredPapers,
        });
      }
    } catch (err) {
      res.status(404).render("results", {
        title: "Enter something",
        message: "Enter semester and stream",
      });
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
