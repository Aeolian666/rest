'use strict';
var data = require('../../data/data.js');
/**
 * Operations on /patient/{id}
 */
module.exports = {
    /**
     * summary: Get a patient by Id
     * description:
     * parameters: id
     * produces: application/json
     * responses: 200, 405
     */
    get: function getCourse(req, res, next) {
        res.send(data.course.find(record => record.id == req.params.id));
    }
};
