const db = require("../models");
const TrackingPixel = db.trackingPixel;

exports.findByHash = (req, res) => {
  const hash = req.params.hash;

  TrackingPixel.findAll({ where: { hash: hash } })
    .then(data => {
      if (data[0]) {
        const newOpens = parseInt(data[0].opens) + 1;

        TrackingPixel.update({ opens: newOpens }, {
          where: {
            hash: hash
          }
        });

        res.status(200);
        res.render('pixel', { title: 'Tracker App' });
      } else {
        res.send('The hash no exist');
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Sorry... try later"
      });
    });
};
