'use strict';
var data = require('../../data/data.js');
/**
 * Operations on /doctor/{id}
 */
module.exports = {
    /**
     * summary: Get a doctor by Id
     * description:
     * parameters: id
     * produces: application/json
     * responses: 200, 405
     */
    get: function getStudent(req, res, next) {
        res.send(data.student.find(record => record.id == req.params.id));
    }
};
