module.exports = (sequelize, Sequelize) => {
  const TrackingPixel = sequelize.define("tracking_pixel", {
    hash: {
      type: Sequelize.STRING
    },
    opens: {
      type: Sequelize.INTEGER
    },
  },{
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  return TrackingPixel;
};
