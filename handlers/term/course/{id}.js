'use strict';
var data = require('../../../data/data.js');
/**
 * Operations on /visit/patient/{id}
 */
module.exports = {
    /**
     * summary: Get visit(s) by patient Id
     * description:
     * parameters: id
     * produces: application/json
     * responses: 200, 405
     */
    get: function getCourseTerms(req, res, next) {
        res.send(data.term.filter(record => record.course_id == req.params.id));
    }
};
