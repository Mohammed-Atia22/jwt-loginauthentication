const customapierror = require('./custom-error');
const {StatusCodes} = require('http-status-codes');

class unauthenticatederror extends customapierror{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = unauthenticatederror;