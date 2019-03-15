const router = require('express').Router();
const controller = require('./controller');

router.route('/places')
  .get(controller.getAll)
  .post(controller.post)

router.route('/places/:place_id')
  .get(controller.get)
  .delete(controller.delete);

module.exports = router;