const Sequelize = require('sequelize');
const connection = require('./');

const Places = connection.define('place', {
  name: Sequelize.STRING,
  lng: Sequelize.FLOAT,
  lat: Sequelize.FLOAT
});

Places.sync({force: false})
  .then(() => {
    console.log('PostgreSQL connection synced');
  })
  .catch(err => {
    console.error('Sync failed: ', err);
  })

module.exports = Places;