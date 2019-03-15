const Sequelize = require('sequelize');
const connection = require('./');

const Places = connection.define(
  'place',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    place_id: Sequelize.STRING
  },
  { timestamps: false }
);

connection
  .sync()
  .then(() => {
    console.log('PostgreSQL connection synced');
  })
  .catch(err => {
    console.error('Sync failed: ', err);
  });

module.exports = Places;
