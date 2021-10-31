'use strict';
var data = require('../data/data.js');
/**
 * Operations on /patients
 */
module.exports = {
    /**
     * summary: Get all patients
     * description:
     * parameters:
     * produces: application/json
     * responses: 200, 405
     */
    get: function getCourses(req, res, next) {
        res.send(data.course);
    }
};
