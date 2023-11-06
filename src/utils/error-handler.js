/**
 * Class representing a custom error with an HTTP status code.
 * @class
 * @extends Error
 */
class CustomError extends Error {
    /**
     * Creates an instance of CustomError.
     * @constructor
     * @param {number} code - The HTTP status code of the error.
     * @param {string} message - The error message.
     */
    constructor(code, message) {
        super(message)
        this.name = 'CustomError'
        this.status = code
    }
}

module.exports = CustomError
