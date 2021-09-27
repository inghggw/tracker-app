module.exports = (sequelize, Sequelize) => {
  const TrackingUrl = sequelize.define("tracking_url", {
    hash: {
      type: Sequelize.STRING
    },
    opens: {
      type: Sequelize.INTEGER
    },
    url: {
      type: Sequelize.STRING
    },
  },{
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  return TrackingUrl;
};
