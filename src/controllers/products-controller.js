const productService = require('../services/products-service');
const { setResponseWithError, setResponseWithOk } = require('../utils/common-response');

/**
 * Module providing configuration for the Dummy Data API URL.
 * @module ProductsController
 */

/**
 * Handles the retrieval of a product by its ID and sends an HTTP response.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<Object>} The product data if found.
 * @throws {CustomError} If the product is not found or an error occurs.
 */
const getProductById = async (req, res) => {
  try {
    /**
     * The ID of the product to retrieve.
     * @type {string}
     */
    const productId = req.params.id;

    /**
     * The product data retrieved from the service.
     * @type {Object}
     */
    const product = await productService.getProductById(productId);

    /**
     * Sends an HTTP response with the retrieved product data.
     * @type {function}
     */
    setResponseWithOk(res, 200, { 'product': product });
  } catch (error) {
    /**
     * Sends an HTTP response with an error message and status code.
     * @type {function}
     */
    setResponseWithError(res, error.status, error.message);
  }
};

module.exports = {
  getProductById
};