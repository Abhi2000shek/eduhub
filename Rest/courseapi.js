var express = require('express');
var router = express.Router();
var CourseCollection = require('../Model/course');
router.post('/addcourse', (req, res) => {
    var cc = new CourseCollection({
        Title: req.body.Title,
        Path: req.body.Path,
        Des: req.body.Des
    });
    cc.save((err, data) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ coursedata: data });
    });
});

router.get('/readcourse', (req, res) => {
    CourseCollection.find({}, (err, data) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ coursedata: data });
    });
});

router.delete('/deletecourse/:id', (req, res) => {
    CourseCollection.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ coursedata: data });
    });
});

router.put('/updatecourse', (req, res) => {
    CourseCollection.findById(req.body._id, (err, data) => {
        data.Title = req.body.Title;
        data.Path = req.body.Path;
        data.Des = req.body.Des;
        data.save((err, data) => {
            if (err)
                res.status(500).json({ errmsg: err });
            res.status(200).json({ coursedata: data });
        });
    });
});
module.exports = router;