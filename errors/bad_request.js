const customapierror = require('./custom-error');
const {StatusCodes} = require('http-status-codes');

class badrequest extends customapierror{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = badrequest;