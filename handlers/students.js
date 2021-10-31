'use strict';
var data = require('../data/data.js');
/**
 * Operations on /doctors
 */
module.exports = {
    /**
     * summary: Get all doctors
     * description:
     * parameters:
     * produces: application/json
     * responses: 200, 405
     */
    get: function getStudents(req, res, next) {
        res.send(data.student);
    }
};
