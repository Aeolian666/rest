'use strict';
var data = require('../../../data/data.js');
/**
 * Operations on /visit/doctor/{id}
 */
module.exports = {
    /**
     * summary: Get visit(s) by doctor Id
     * description:
     * parameters: id
     * produces: application/json
     * responses: 200, 405
     */
    get: function getStudentTerms(req, res, next) {
        res.send(data.term.filter(record => record.student_id == req.params.id));
    }
};
