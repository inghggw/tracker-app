const db = require("../models");
const TrackingUrl = db.trackingUrl;

exports.findByHash = (req, res) => {
  const hash = req.params.hash;

  TrackingUrl.findAll({ where: { hash: hash } })
    .then(data => {
      if (data[0]) {
        const newOpens = parseInt(data[0].opens) + 1;
        const urlTracking = data[0].url;

        TrackingUrl.update({ opens: newOpens }, {
          where: {
            hash: hash
          }
        });

        res.status(302);
        res.redirect(urlTracking);
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
