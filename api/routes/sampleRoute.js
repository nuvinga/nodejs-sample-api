'use strict';
module.exports = function(app) {
  var controller = require('../controllers/sampleController');

  app.route('/getdata').get(controller.getdata);
};