'use strict';
var data = require('../../data/data.js');
/**
 * Operations on /visit/{id}
 */
module.exports = {
    /**
     * summary: Get a visit by Id
     * description:
     * parameters: id
     * produces: application/json
     * responses: 200, 405
     */
    get: function getTerm(req, res, next) {
        res.send(data.term.find(record => record.id == req.params.id));
    }
};
