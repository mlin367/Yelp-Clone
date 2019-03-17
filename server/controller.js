const Places = require('../database/models');

module.exports = {
  getAll: (req, res) => {
    Places.findAll()
      .then(places => {
        res.status(200).send(places);
      })
      .catch(err => console.error(err));
  },

  get: (req, res) => {
    let { place_id } = req.params;
    Places.findOne({
      where: { place_id }
    })
      .then(place => res.status(200).send(place))
      .catch(err => console.error(err));
  },

  post: (req, res) => {
    let { place_id } = req.body;
    Places.create({ place_id })
      .then(response => res.status(201).send(response))
      .catch(err => console.error(err));
  },

  delete: (req, res) => {
    let { place_id } = req.params;
    Places.destroy({ where: { place_id } })
      .then(response => res.status(203).send('place deleted'))
      .catch(err => console.error(err));
  }
};
