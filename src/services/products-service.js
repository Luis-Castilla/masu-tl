const axios = require('axios');
const CustomError = require('../utils/error-handler');
const config = require('../config/config');

/**
 * Module providing configuration for the Dummy Data API URL.
 * @module ProductsService
 */

/**
 * Fetches a product by its ID from the external API.
 *
 * @function
 * @async
 * @param {number} productId - The ID of the product to retrieve.
 * @returns {Promise<Object>} The product data if found.
 * @throws {CustomError} If the product is not found or an error occurs.
 */
const getProductById = async (productId) => {
  /**
   * The base URL of the Dummy Data API.
   * @type {string}
   */
  const baseUrl = config.dummyData.url;

  /**
   * The full URL to fetch the product data.
   * @type {string}
   */
  const apiUrl = `${baseUrl}/${productId}`;

  try {
    const response = await axios.get(apiUrl);

    if (!response.data) {
      throw new CustomError(404, 'Product not found');
    }

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new CustomError(404, 'Product not found');
    }

    throw new CustomError(500, 'Something went wrong');
  }
};

module.exports = {
  getProductById
};